import { NextResponse } from "next/server";
import SambaNova from "sambanova";

const client = new SambaNova({
  baseURL: process.env.AI_BASE_URL,
  apiKey: process.env.AI_SECRET,
});

/* ---------------------------------
   JSON CLEANER (AI SAFETY)
---------------------------------- */

function extractAndCleanJSON(text) {
  if (!text) return null;

  let cleaned = text.trim();

  // Remove markdown code blocks
  cleaned = cleaned.replace(/```json/g, "").replace(/```/g, "");

  // Extract JSON portion if AI added extra text
  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");

  if (firstBrace !== -1 && lastBrace !== -1) {
    cleaned = cleaned.slice(firstBrace, lastBrace + 1);
  }

  // Remove trailing commas
  cleaned = cleaned.replace(/,\s*([}\]])/g, "$1");

  return cleaned;
}

/* ---------------------------------
   STRUCTURE VALIDATOR
---------------------------------- */

function validateStructure(parsed) {
  if (!parsed) return false;

  if (typeof parsed.title !== "string") return false;
  if (!Array.isArray(parsed.bullets)) return false;
  if (typeof parsed.description !== "string") return false;
  if (!Array.isArray(parsed.keywords)) return false;

  return true;
}

/* ---------------------------------
   NORMALIZE OUTPUT
---------------------------------- */

function normalizeOutput(parsed, marketplace) {
  if (!parsed.bullets) parsed.bullets = [];
  if (!parsed.keywords) parsed.keywords = [];

  // bullet limits
  if (marketplace === "amazon") {
    parsed.bullets = parsed.bullets.slice(0, 5);
  }

  if (marketplace === "myntra") {
    parsed.bullets = parsed.bullets.slice(0, 5);
  }

  if (marketplace === "flipkart") {
    parsed.bullets = parsed.bullets.slice(0, 6);
  }

  // remove duplicates in keywords
  parsed.keywords = [...new Set(parsed.keywords)];

  return parsed;
}

/* ---------------------------------
   API ROUTE
---------------------------------- */

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      productName,
      brandName,
      marketplace,
      productCategory,
      keyFeatures,
      priceRange,
      keywords,
    } = body;

    /* ---------------------------------
       SERVER VALIDATION
    ---------------------------------- */

    if (!productName || !marketplace || !productCategory) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!Array.isArray(keyFeatures) || keyFeatures.length < 3) {
      return NextResponse.json(
        { message: "At least 3 key features required." },
        { status: 400 }
      );
    }

    if (!["amazon", "flipkart", "myntra"].includes(marketplace)) {
      return NextResponse.json(
        { message: "Invalid marketplace." },
        { status: 400 }
      );
    }

    /* ---------------------------------
       MARKETPLACE PROMPTS
    ---------------------------------- */

    let systemPrompt = "";

    if (marketplace === "amazon") {
      systemPrompt = `
You are a senior Amazon SEO listing copywriter.

Title:
- Max 200 characters
- Brand first if available

Bullets:
- EXACTLY 5 bullet points
- Each bullet 150–250 characters
- Feature → Benefit format

Description:
- 300–800 characters

Keywords:
- 10–15 search terms
- No punctuation

Rules:
- No emojis
- No promotional claims
- No URLs
- No contact info

Return ONLY valid JSON:

{
"title": "",
"bullets": ["", "", "", "", ""],
"description": "",
"keywords": []
}
`;
    }

    else if (marketplace === "flipkart") {
      systemPrompt = `
You are an expert Flipkart marketplace listing writer.

Title:
- Max 150 characters

Bullets:
- 5–6 bullets
- ≤200 characters each

Description:
- 300–700 characters

Keywords:
- 10–15 search terms

Return ONLY valid JSON:

{
"title": "",
"bullets": [],
"description": "",
"keywords": []
}
`;
    }

    else if (marketplace === "myntra") {
      systemPrompt = `
You are a Myntra fashion listing expert.

Title:
- 60–120 characters
- Format: Brand + Gender + Product + Attribute

Bullets:
- EXACTLY 5 bullets
- ≤180 characters

Description:
- 200–600 characters

Keywords:
- 10–15 fashion search terms

Return ONLY valid JSON:

{
"title": "",
"bullets": ["", "", "", "", ""],
"description": "",
"keywords": []
}
`;
    }

    /* ---------------------------------
       USER PROMPT
    ---------------------------------- */

    const userPrompt = `
Generate a marketplace listing.

Product Name: ${productName}
Brand: ${brandName || "Generic"}
Category: ${productCategory}
Price Range: ${priceRange}

Key Features:
${keyFeatures.join("\n")}

Target Keywords:
${keywords.join(", ")}

Expand product benefits naturally.
Use keywords naturally.
`;

    /* ---------------------------------
       AI GENERATION
    ---------------------------------- */

    const completion = await client.chat.completions.create({
      model: "Meta-Llama-3.3-70B-Instruct",
      temperature: 0.65,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });

    const content = completion.choices[0].message.content;

    /* ---------------------------------
       SAFE JSON PARSING
    ---------------------------------- */

    let parsed;

    try {
      const cleaned = extractAndCleanJSON(content);

      if (!cleaned) {
        throw new Error("No JSON detected");
      }

      parsed = JSON.parse(cleaned);

    } catch (error) {
      console.error("AI JSON parse error:", content);

      return NextResponse.json(
        {
          message: "AI returned invalid JSON.",
          raw: content
        },
        { status: 500 }
      );
    }

    /* ---------------------------------
       STRUCTURE VALIDATION
    ---------------------------------- */

    if (!validateStructure(parsed)) {
      return NextResponse.json(
        { message: "AI returned incomplete structure." },
        { status: 500 }
      );
    }

    /* ---------------------------------
       NORMALIZATION
    ---------------------------------- */

    parsed = normalizeOutput(parsed, marketplace);

    /* ---------------------------------
       SUCCESS
    ---------------------------------- */

    return NextResponse.json(
      {
        message: "listing generated",
        data: parsed,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "internal server error." },
      { status: 500 }
    );
  }
}