import React from "react";

const AboutPage = () => {
  return (
    <main className="flex justify-center py-24 px-6 bg-muted/10">
      <div className="w-[70%] flex flex-col gap-20">

        {/* Header */}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-semibold">
            About <span className="text-element">Listiq</span>
          </h1>
          <div className="h-[3px] w-20 bg-element rounded-full"></div>
        </div>

        {/* Section 1 */}
        <div className="flex flex-col gap-6 text-xl leading-relaxed">
          <h2 className="text-3xl font-semibold">
            Built for sellers who want results, not guesswork
          </h2>
          <p>
            E-commerce sellers spend countless hours rewriting titles,
            researching keywords, and trying to understand marketplace
            algorithms. Most listings are either under-optimized or copied
            from competitors.
          </p>
          <p>
            Listiq was created to remove that friction — turning simple
            product details into structured, marketplace-ready listings
            optimized for visibility and discoverability.
          </p>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col gap-6 text-xl leading-relaxed">
          <h2 className="text-3xl font-semibold">
            Marketplace-focused, not generic AI
          </h2>
          <p>
            Unlike general AI tools, Listiq is built specifically for
            e-commerce platforms like Amazon, Myntra, and Flipkart.
          </p>
          <p>
            Each listing is structured with marketplace formatting,
            keyword placement logic, and conversion-focused writing —
            so sellers can publish faster and compete smarter.
          </p>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col gap-6 text-xl leading-relaxed">
          <h2 className="text-3xl font-semibold">
            Our Vision
          </h2>
          <p>
            Our goal is simple: empower sellers with intelligent tools
            that simplify growth. We believe technology should reduce
            complexity, not add to it.
          </p>
          <p>
            As Listiq evolves, we aim to expand beyond listing generation
            into deeper marketplace intelligence and seller optimization.
          </p>
        </div>

      </div>
    </main>
  );
};

export default AboutPage;