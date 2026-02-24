'use client'
import React, { useState } from "react";

const ListingOutput = () => {

    const [data, setData] = useState()

  return (
    <div>
      <div className="flex flex-col items-start gap-1 mb-10">
        <h3 className="text-muted-foreground text-sm">PREVIEW</h3>
        <h4 className="text-2xl tracking-tight font-semibold">Your optimized listing</h4>
        <p className="text-muted-foreground">
          Structured for marketplace ranking and visibility.
        </p>
      </div>
  <div className="bg-white rounded-2xl shadow-sm p-6 min-h-[600px] flex flex-col">
    
    {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-semibold">Generated Listing</h3>
      <span className="text-sm text-muted-foreground">
        Ready to copy
      </span>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-100 mb-4" />

    {/* Empty State */}
    {data && <div>
        <div className="mb-6">
  <div className="flex items-center justify-between mb-2">
    <h5 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
      Title
    </h5>
    <button className="text-xs text-element font-medium hover:underline">
      Copy
    </button>
  </div>

  <div className="bg-gray-50 p-4 rounded-lg text-sm leading-relaxed">
    title
  </div>
</div>
<div className="mb-6">
  <div className="flex items-center justify-between mb-2">
    <h5 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
      Key Highlights
    </h5>
    <button className="text-xs text-element font-medium hover:underline">
      Copy All
    </button>
  </div>

  <ul className="bg-gray-50 p-4 rounded-lg text-sm space-y-2">
      <li>• bullet point</li>
      <li>• bullet point</li>
      <li>• bullet point</li>
      <li>• bullet point</li>
      <li>• bullet point</li>
      <li>• bullet point    </li>
  </ul>
</div>

<div className="flex flex-wrap gap-2">
  
    <span
      className="px-3 py-1 text-xs rounded-full bg-element/10 text-element font-medium"
      >
      word
    </span>
    <span
      className="px-3 py-1 text-xs rounded-full bg-element/10 text-element font-medium"
      >
      word
    </span>
    <span
      className="px-3 py-1 text-xs rounded-full bg-element/10 text-element font-medium"
      >
      word
    </span>
    <span
      className="px-3 py-1 text-xs rounded-full bg-element/10 text-element font-medium"
      >
      word
    </span>
    <span
      className="px-3 py-1 text-xs rounded-full bg-element/10 text-element font-medium"
      >
      word
    </span>

</div>
</div>
}

    {!data && <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-element/10 flex items-center justify-center">
        ✨
        </div>
        <h4 className="text-lg font-medium">
        Your optimized listing will appear here
      </h4>
      <p className="text-sm text-muted-foreground max-w-xs">
        Fill in product details on the left and click generate.
        We’ll create a marketplace-optimized title,
        description and keywords.
      </p>
    </div> }

  </div>
    </div>
  );
};

export default ListingOutput;
