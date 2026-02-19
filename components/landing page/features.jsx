import React from "react";

const FeaturedSection = () => {
  return (
    <section id="features" className="flex flex-col items-center">
      <div className="flex items-center justify-end w-full">
        <div className="w-[60%] flex flex-col gap-5">
          <h3 className="text-4xl font-semibold">AI Amazon Listing Partner</h3>
          <p className="text-xl">
            Let the marketplace tuned AI turn your raw product details into
            keyword‑rich titles, bullets, descriptions, and keywords that are
            ready for Amazon, Flipkart and other marketplaces in seconds.
          </p>
        </div>

        <div className="w-[40%] flex justify-center">
          <img
            src="/assets/home/featured section/featured1.png"
            alt="featured image 1"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="w-[40%] flex justify-center">
          <img
            src="/assets/home/featured section/featured2.png"
            alt="featured image 2"
          />
        </div>
        <div className="flex flex-col gap-5 w-[60%]">
          <h3 className="text-4xl font-semibold">Turn product facts into profit</h3>
          <p className="text-xl">
            Stop guessing keywords or rewriting the same lines for every SKU.
            Just feed in your product name, brand, key features, price, and
            audience, and get a complete, marketplace‑safe listing you can paste
            straight into your seller panel.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
