"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronDown } from "lucide-react";

const ProductListingForm = () => {
  // handling marketplace selection
  const [selectedMarketplace, setSelectedMarketplace] = useState("amazon");
  const handleSelectMarketplace = (marketplace) => {
    setSelectedMarketplace(marketplace);
  };

  // handling price range menu toggle
  const [isPriceRangeSelectionOpen, setIsPriceRangeSelectionOpen] =
    useState(false);
  const handleTogglePriceRangeSelectionMenu = () => {
    setIsPriceRangeSelectionOpen((prev) => !prev);
  };
  //  handling price range selection
  const [priceRange, setPriceRange] = useState("mid-range");
  const handleSelectPriceRange = (priceRange) => {
    setPriceRange(priceRange);
    handleTogglePriceRangeSelectionMenu();
  };

  useEffect(() => {
    if (priceRange) {
      console.log(priceRange);
    }
  }, [priceRange]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h3 className="text-muted-foreground text-sm">NEW LISTING</h3>
        <h4 className="text-2xl tracking-tight font-semibold">Tell us about your product</h4>
        <p className="text-muted-foreground">
          Enter basic details below — our AI handles rest.
        </p>
      </div>

      <form className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-3">
        <h5 className="text-sm font-semibold">MARKETPLACE</h5>
        <div className="flex items-center justify-around w-full gap-5">
          <button
            type="button"
            onClick={() => {
              handleSelectMarketplace("amazon");
            }}
            className={`w-1/3 flex flex-col justify-center items-center py-3 rounded-lg transition cursor-pointer gap-2 ${selectedMarketplace === "amazon" ? "bg-element/20" : "bg-gray-50 hover:bg-gray-100 transition duration-300"}`}
          >
            <img
              src="/assets/logos/amazon.png"
              alt="amazon"
              className="h-14 object-contain"
            />
            <h6>Amazon</h6>
          </button>
          <button
            type="button"
            onClick={() => {
              handleSelectMarketplace("myntra");
            }}
            className={`w-1/3 flex flex-col justify-center items-center py-3 rounded-lg cursor-pointer gap-2 ${selectedMarketplace === "myntra" ? "bg-element/20" : "bg-gray-50 hover:bg-gray-100 transition duration-300"}`}
          >
            <img
              src="/assets/logos/myntra.png"
              alt="myntra"
              className="h-14 object-contain"
            />
            <h6>Myntra</h6>
          </button>
          <button
            type="button"
            onClick={() => {
              handleSelectMarketplace("flipkart");
            }}
            className={`w-1/3 flex flex-col justify-center items-center py-3 rounded-lg cursor-pointer gap-2 ${selectedMarketplace === "flipkart" ? "bg-element/20" : "bg-gray-50 hover:bg-gray-100 transition duration-300"}`}
          >
            <img
              src="/assets/logos/flipkart.png"
              alt="flipkart"
              className="h-14 object-contain rounded-lg"
            />
            <h6>Flipkart</h6>
          </button>
        </div>

        <hr className="border-[1px] border-gray-100 my-5" />

        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <label className="font-semibold">Product Name</label>
            <input
              type="text"
              placeholder="e.g Men's Cotton Round Neck T-Shirt"
              className="border-[1px] border-gray-200 px-5 py-3 rounded-lg focus:border-none focus:outline-1 focus:outline-element transition-all duration-500 text-sm focus:text-[16px] capitalize"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="font-semibold">Product Category</label>
            <input
              type="text"
              placeholder="🔍 Search Category"
              className="border-[1px] border-gray-200 px-5 py-3 rounded-lg focus:border-none focus:outline-1 focus:outline-element transition-all duration-500 text-sm focus:text-[16px] capitalize"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="font-semibold">Key Features</label>
            <textarea
              placeholder={
                " 100% cotton\n Regular fit\n Breathable fabric\n Machine washable"
              }
              className="border-[1px] border-gray-200 px-5 py-3 rounded-lg focus:border-none focus:outline-1 focus:outline-element transition-all duration-500 text-sm focus:text-[16px] capitalize min-h-[10rem] py-5"
            ></textarea>
          </div>

          <div className="w-full flex justify-center gap-5">
            <div className="w-1/2 flex flex-col gap-3">
              <div className="w-full flex items-center justify-between">
                <label className="font-semibold">Brand Name</label>
                <div className="text-sm text-muted-foreground">Optional</div>
              </div>

              <input
                type="text"
                placeholder="Generic"
                className="border-[1px] border-gray-200 px-5 py-3 rounded-lg focus:border-none focus:outline-1 focus:outline-element transition-all duration-500 text-sm focus:text-[16px] capitalize"
              />
            </div>

            <div className="w-1/2 flex flex-col gap-3">
              <label className="font-semibold">Price Range</label>
              <div className="relative w-full">
                <button
                  type="button"
                  onClick={handleTogglePriceRangeSelectionMenu}
                  className="border-[1px] border-gray-200 px-5 py-3 rounded-lg transition-all duration-500 text-sm capitalize flex justify-between cursor-pointer w-full"
                >
                  {priceRange}
                  {isPriceRangeSelectionOpen ? (
                    <ChevronDown />
                  ) : (
                    <ChevronLeft />
                  )}
                </button>

                {isPriceRangeSelectionOpen && (
                  <ul className="absolute top-14 bg-white w-full border-[1px] border-gray-200 rounded-lg left-0 z-10">
                    <li
                      onClick={() => handleSelectPriceRange("budget")}
                      className="hover:bg-gray-100 cursor-pointer py-2 px-5"
                    >
                      Budget
                    </li>
                    <li
                      onClick={() => handleSelectPriceRange("mid-range")}
                      className="hover:bg-gray-100 cursor-pointer py-2 px-5"
                    >
                      Mid-range
                    </li>
                    <li
                      onClick={() => handleSelectPriceRange("premium")}
                      className="hover:bg-gray-100 cursor-pointer py-2 px-5"
                    >
                      Premium
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <label className="font-semibold">Target Keywords</label>
            <div className="w-full flex flex-col gap-2">
              <input
                type="text"
                placeholder="Cotton t-shirt for men, men casual t-shirt..."
                className="border-[1px] border-gray-200 px-3 py-3 rounded-lg focus:border-none focus:outline-1 focus:outline-element transition-all duration-500 text-sm focus:text-[16px] capitalize w-full"
              />
              <p className="text-sm text-muted-foreground">
                separate with comma ,
              </p>
            </div>
          </div>

          <input
            type="submit"
            value={"Generate Now"}
            className="bg-element py-3 cursor-pointer font-semibold text-white text-lg rounded-lg"
          />
        </div>
      </form>
    </div>
  );
};

export default ProductListingForm;
