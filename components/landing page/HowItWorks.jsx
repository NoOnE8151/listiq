const HowItWorks = () => {
  return (
    <section id="how-it-works" >
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h3 className="text-sm text-muted-foreground uppercase tracking-wide">
            How It Works
          </h3>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-2">
            Generate marketplace-ready listings in 3 simple steps
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Listiq transforms basic product details into structured,
            SEO-optimized listings tailored for Amazon, Myntra and Flipkart.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-element text-2xl font-bold mb-4">01</div>
            <h4 className="text-lg font-semibold mb-2">
              Enter Product Details
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Provide basic information like product name, category,
              key features and price range.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-element text-2xl font-bold mb-4">02</div>
            <h4 className="text-lg font-semibold mb-2">
              AI Optimizes for Marketplace
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our engine structures titles, descriptions and keywords
              based on marketplace-specific ranking logic.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-element text-2xl font-bold mb-4">03</div>
            <h4 className="text-lg font-semibold mb-2">
              Copy & Publish
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Get ready-to-use optimized content you can directly
              paste into your seller dashboard.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;