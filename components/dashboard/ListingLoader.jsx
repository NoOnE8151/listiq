"use client";
import React from "react";

const GeneratingListingLoader = () => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">

      <div className="flex flex-col items-center gap-6">

        {/* Loader */}
        <div className="relative flex items-center justify-center">

          <div className="w-16 h-16 border-4 border-gray-200 border-t-element rounded-full animate-spin"></div>

          <div className="absolute flex gap-1">
            <span className="w-2 h-2 bg-element rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-element rounded-full animate-bounce [animation-delay:150ms]"></span>
            <span className="w-2 h-2 bg-element rounded-full animate-bounce [animation-delay:300ms]"></span>
          </div>

        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-xl font-semibold tracking-tight">
            Generating Your Listing
          </h3>
          <p className="text-sm text-muted-foreground">
            Our AI is crafting the perfect product listing...
          </p>
        </div>

      </div>

    </div>
  );
};

export default GeneratingListingLoader;