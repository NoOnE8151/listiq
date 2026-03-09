"use client";
import React, { useEffect, useRef, useState } from "react";
import { Copy, Check } from "lucide-react";
import handleRedirect from "@/utils/tools/redirect";

const ListingOutput = ({ generatedOutput }) => {
  const [data, setData] = useState(null);
  const [copied, setCopied] = useState("");
  const outputRef = useRef(null);

  useEffect(() => {
    if (generatedOutput) {
      setData(generatedOutput);
      handleRedirect(outputRef);
    }
  }, [generatedOutput]);

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(""), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const handleCopyAllBullets = () => {
    const text = data.bullets.join("\n");
    handleCopy(text, "bullets");
  };

  return (
    <div ref={outputRef}>
      {/* Header */}
      <div className="flex flex-col items-start gap-1 mb-10">
        <h3 className="text-muted-foreground text-sm">PREVIEW</h3>
        <h4 className="text-2xl tracking-tight font-semibold">
          Your optimized listing
        </h4>
        <p className="text-muted-foreground">
          Structured for marketplace ranking and visibility.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6 min-h-[600px] flex flex-col gap-6">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Generated Listing</h3>
          <span className="text-sm text-muted-foreground">
            Ready to publish
          </span>
        </div>

        <div className="border-t border-gray-100" />

        {data ? (
          <div className="flex flex-col gap-8">

            {/* TITLE */}
            <div className="bg-gray-50 p-5 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <h5 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Title
                </h5>

                <button
                  onClick={() => handleCopy(data.title, "title")}
                  className="flex items-center gap-1 text-xs text-element font-medium hover:underline"
                >
                  {copied === "title" ? <Check size={14}/> : <Copy size={14}/>}
                  {copied === "title" ? "Copied" : "Copy"}
                </button>
              </div>

              <p className="text-sm leading-relaxed">{data.title}</p>
            </div>

            {/* DESCRIPTION */}
            {data.description && (
              <div className="bg-gray-50 p-5 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Description
                  </h5>

                  <button
                    onClick={() => handleCopy(data.description, "description")}
                    className="flex items-center gap-1 text-xs text-element font-medium hover:underline"
                  >
                    {copied === "description" ? <Check size={14}/> : <Copy size={14}/>}
                    {copied === "description" ? "Copied" : "Copy"}
                  </button>
                </div>

                <p className="text-sm leading-relaxed">
                  {data.description}
                </p>
              </div>
            )}

            {/* BULLETS */}
            <div className="bg-gray-50 p-5 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <h5 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Key Highlights
                </h5>

                <button
                  onClick={handleCopyAllBullets}
                  className="flex items-center gap-1 text-xs text-element font-medium hover:underline"
                >
                  {copied === "bullets" ? <Check size={14}/> : <Copy size={14}/>}
                  {copied === "bullets" ? "Copied" : "Copy All"}
                </button>
              </div>

              <ul className="space-y-2 text-sm leading-relaxed">
                {data?.bullets?.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-element font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* KEYWORDS */}
            {data.keywords && (
              <div className="bg-gray-50 p-5 rounded-xl">
                <h5 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                  SEO Keywords
                </h5>

                <div className="flex flex-wrap gap-2">
                  {data?.keywords?.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-element/10 text-element font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-element/10 flex items-center justify-center text-2xl">
              ✨
            </div>
            <h4 className="text-lg font-medium">
              Your optimized listing will appear here
            </h4>
            <p className="text-sm text-muted-foreground max-w-xs">
              Fill in product details and generate a listing. Your SEO optimized
              title, bullets and description will appear here instantly.
            </p>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default ListingOutput;