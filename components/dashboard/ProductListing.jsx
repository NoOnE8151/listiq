"use client";
import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronDown, X } from "lucide-react";
import { useForm } from "react-hook-form";
import getCategory from "@/utils/marketplace/get-categories";
import handleRedirect from "@/utils/tools/redirect";
import Confirmation from "./Confirmation";

const ProductListingForm = ({ setGeneratedOutput }) => {
  //handling confirmation popup
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

  // handling marketplace selection
  const [selectedMarketplace, setSelectedMarketplace] = useState("amazon");
  const handleSelectMarketplace = (marketplace) => {
    setSelectedMarketplace(marketplace);
  };

  //handling product categories selection
  const productCategoryRef = useRef(null); //input reference
  const [marketplaceCategories, setMarketplaceCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isCategorySelecting, setIsCategorySelecting] = useState(false); // this is for conditional rendering of category suggestion element when category input is focused

  // this use effect assigns relative categories to marketplace categories usestate based on marketplace selection
  useEffect(() => {
    const categories = getCategory(selectedMarketplace);
    setMarketplaceCategories(categories);
  }, [selectedMarketplace]);

  //handling search category system
  const [matchingCategories, setMatchingCategories] = useState([]);
  const handleCategorySearch = (e) => {
    //this function runs onChange event of product category input

    //search system
    const query = e.target.value;
    const result = marketplaceCategories.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase()),
    );
    setMatchingCategories(result);
    setSelectedCategory(query);

    //error handling
    if (marketplaceCategories.includes(query)) {
      setShowProductCategoryError(false);
    }

    if (!marketplaceCategories.includes(query)) {
      setProductCategoryError(
        "written category is invalid please select a valid category",
      ); // if user wrote invalid category then change error message to specific from default
      setShowProductCategoryError(true);
    }
  };

  //handling final category selection
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setShowProductCategoryError(false); //doesnt show error message as selected category becomes valid if this function is executed
    setProductCategoryError(defaultCategoryError); //as selected category is valid then switch  back to default error message
  };

  //selecting nothing  if user writes invalid value in
  const defaultCategoryError = "please select a product category";
  const [productCategoryError, setProductCategoryError] =
    useState(defaultCategoryError);
  const [showProductCategoryError, setShowProductCategoryError] =
    useState(false);
  const handleOnBlur = () => {
    if (selectedCategory === "") {
      setShowProductCategoryError(true);
      setIsCategorySelecting(false);
      return;
    }
    if (!marketplaceCategories.includes(selectedCategory)) {
      setProductCategoryError(
        "written category is invalid please select a valid category",
      ); // if user wrote invalid category then change error message to specific from default
      setShowProductCategoryError(true);
    }
    setIsCategorySelecting(false);
  };

  useEffect(() => {
    console.log("selected category is ", selectedCategory);
  }, [selectedCategory]);

  //handling key features input
  const [isKeyFeatureAdding, setIsKeyFeatureAdding] = useState(false);
  const defaultKeyFeaturesError =
    "please add atleast 3 key features of your product";
  const [keyFeaturesError, setKeyFeaturesError] = useState(
    defaultKeyFeaturesError,
  );
  const [showKeyFeaturesError, setShowKeyFeaturesError] = useState(false);
  const [keyFeatures, setKeyFeatures] = useState([]);
  const [keyFeaturesInputValue, setKeyFeaturesInputValue] = useState("");
  const keyFeaturesRef = useRef(null); // keyfeatures element reference

  const handleKeyFeaturesChange = (e) => {
    let value = e.target.value; //current value of input
    //showing add/cancel button based on following condition
    if (value) {
      setIsKeyFeatureAdding(true);
    } else setIsKeyFeatureAdding(false);

    setKeyFeaturesInputValue(value);
  };

  //push the current input value to the key features array using this function (add button)
  const handleAddKeyFeature = () => {
    const updatedKeyFeatures = [...keyFeatures, keyFeaturesInputValue];

    setKeyFeatures(updatedKeyFeatures);
    setKeyFeaturesInputValue("");
    setIsKeyFeatureAdding(false);

    if (updatedKeyFeatures.length < 3) {
      handleRedirect(keyFeaturesRef);
      setKeyFeaturesError("please add atleast 3 key features of your product");
      setShowKeyFeaturesError(true);
      return;
    } else {
      setShowKeyFeaturesError(false);
      setKeyFeaturesError(defaultKeyFeaturesError);
    }
  };
  const handleRemoveKeyFeature = (indexToRemove) => {
    const updatedKeyFeatures = keyFeatures.filter(
      (_, index) => index !== indexToRemove,
    );
    setKeyFeatures(updatedKeyFeatures);

    // error handling based on updated value
    if (updatedKeyFeatures.length < 3) {
      handleRedirect(keyFeaturesRef);
      setKeyFeaturesError("please add atleast 3 key features of your product");
      setShowKeyFeaturesError(true);
      return;
    } else {
      setShowKeyFeaturesError(false);
      setKeyFeaturesError(defaultKeyFeaturesError);
    }
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

  //handling keyword validation
  const [inputValue, setInputValue] = useState("");
  const [keywords, setKeywords] = useState([]);
  const defaultKeywordsError = "please enter atleast 10 characters of keywords";
  const [keywordsError, setKeywordsError] = useState(defaultKeywordsError);
  const [showKeywordsError, setShowKeywordsError] = useState(false);
  const [keywordsMaxLength, setKeywordMaxLength] = useState(100);

  const handleKeywordValidation = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const parsed = value
      .split(",")
      .map((word) => word.trim())
      .filter((word) => word.length > 0);

    setKeywords(parsed);

    //error handling
    if (value.length >= keywordsMaxLength) {
      setKeywordsError(
        `maximum keywords length (${keywordsMaxLength} characters) reached`,
      );
      setShowKeywordsError(true);
    } else if (value.length < 10) {
      setKeywordsError(defaultKeywordsError);
      setShowKeywordsError(true);
    } else {
      setShowKeywordsError(false);
    }
  };

  // handling product listing form
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  //handling form validation for manual inputs (inputs that doesnt user ...register from react hook form4
  const formValidation = async () => {
    const reactHookFormValid = await trigger();
    if (!reactHookFormValid) {
      return false;
    }
    // category
    if (
      !selectedCategory ||
      !marketplaceCategories.includes(selectedCategory)
    ) {
      handleRedirect(productCategoryRef);
      setShowProductCategoryError(true);
      return false;
    }

    // key features
    if (keyFeatures.length < 3) {
      handleRedirect(keyFeaturesRef);
      setKeyFeaturesError("please add atleast 3 key features");
      setShowKeyFeaturesError(true);
      return false;
    }

    if (keyFeatures.length > 10) {
      setKeyFeaturesError("maximum 10 key features allowed");
      setShowKeyFeaturesError(true);
      return false;
    }

    // keywords
    if (inputValue.length < 10) {
      setShowKeywordsError(true);
      return false;
    }

    return true;
  };


  const handleFormValidation = async () => { 
    const isValid = await formValidation();
    if (!isValid) {
      return;
    }
    setShowConfirmationPopup(true);
   }

  const [isGenerating, setIsGenerating] = useState(false);
  const onSubmit = async (data) => {
    setIsGenerating(true);
    setShowConfirmationPopup(false);
    // payload
    const payload = {
      ...data,
      marketplace: selectedMarketplace,
      productCategory: selectedCategory,
      keyFeatures,
      priceRange,
      keywords,
    };

    // call ai api and generate listing
    const response = await fetch("/api/ai/generate", {
      method: "POST",
      headers: {
        "Content-Type": "applicaton/json",
      },
      body: JSON.stringify(payload),
    });
    const res = await response.json();
    console.log("genearted list is: \n", res);
    setGeneratedOutput(res.data); //send the generated output data to parent component
    setIsGenerating(false);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h3 className="text-muted-foreground text-sm">NEW LISTING</h3>
        <h4 className="text-2xl tracking-tight font-semibold">
          Tell us about your product
        </h4>
        <p className="text-muted-foreground">
          Enter basic details below — our AI handles rest.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-3"
      >
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

        <hr className="border border-gray-100 my-5" />

        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <label className="font-semibold">Product Name</label>
            <input
              type="text"
              placeholder="e.g Men's Cotton Round Neck T-Shirt"
              className="border border-gray-200 px-5 py-3 rounded-lg focus:border-none focus:outline-1 focus:outline-element transition-all duration-500 text-sm focus:text-[16px] capitalize"
              {...register("productName", {
                maxLength: {
                  value: 120,
                  message: "maximum length of product name is 120 characters",
                },
                required: {
                  value: true,
                  message: "please enter product name",
                },
                minLength: {
                  value: 5,
                  message: "minimum length for product name is 5 characters",
                },
              })}
            />
            {errors.productName && (
              <p className="text-red-500 text-sm">
                {errors.productName.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <label ref={productCategoryRef} className="font-semibold">
              Product Category
            </label>
            <input
              type="text"
              onChange={handleCategorySearch}
              onFocus={() => {
                setIsCategorySelecting(true);
                setMatchingCategories(marketplaceCategories);
              }}
              onBlur={handleOnBlur}
              value={selectedCategory}
              placeholder="🔍 Search Category"
              className="border border-gray-200 px-5 py-3 rounded-lg focus:border-none focus:outline-1 focus:outline-element transition-all duration-500 text-sm focus:text-[16px] capitalize"
            />

            {showProductCategoryError && (
              <p className="text-sm text-red-500">{productCategoryError}</p>
            )}

            {isCategorySelecting && (
              <ul className="relative max-h-40 overflow-auto my-2">
                {matchingCategories.length === 0 ? (
                  <div className="py-2 px-5 text-gray-500">
                    No results found
                  </div>
                ) : (
                  matchingCategories.map((item, idx) => (
                    <li
                      key={idx}
                      onMouseDown={() => handleSelectCategory(item)}
                      className="hover:bg-gray-100 cursor-pointer py-2 px-5 rounded-lg"
                    >
                      {item}
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <label className="font-semibold">Key Features</label>
            <textarea
              ref={keyFeaturesRef}
              onChange={handleKeyFeaturesChange}
              value={keyFeaturesInputValue}
              disabled={keyFeatures.length >= 10}
              placeholder={
                "100% cotton, Regular fit, Breathable fabric, Machine washable"
              }
              className={`border border-gray-200 px-5 rounded-lg focus:border-none focus:outline-1 focus:outline-element transition-all duration-500 text-sm focus:text-[16px] capitalize py-5 ${keyFeatures.length >= 10 ? "cursor-not-allowed" : ""}`}
            />
            {showKeyFeaturesError && (
              <p className="text-sm text-red-500">{keyFeaturesError}</p>
            )}
            {isKeyFeatureAdding && (
              <div className="w-full flex justify-between">
                <button
                  onClick={() => {
                    setKeyFeaturesInputValue("");
                    setIsKeyFeatureAdding(false);
                  }}
                  type="button"
                  className="bg-gray-100 w-1/3 rounded-lg font-semibold py-2 px-5 cursor-pointer hover:bg-gray-200 active:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddKeyFeature}
                  type="button"
                  className="bg-element hover:bg-element-hover active:bg-element-active text-white font-semibold px-5 rounded-lg py-2 w-1/3 cursor-pointer"
                >
                  Add
                </button>
              </div>
            )}

            <div className="flex w-full gap-3 flex-wrap">
              {keyFeatures.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="bg-gray-100 rounded-xl flex items-center justify-between gap-1 w-full"
                  >
                    <div className="w-[90%] px-5 py-2">{item} </div>
                    <button
                      onClick={() => handleRemoveKeyFeature(idx)}
                      type="button"
                      className="w-[10%] px-5 py-2 cursor-pointer"
                    >
                      <X size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
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
                className="border border-gray-200 px-5 py-3 rounded-lg focus:border-none focus:outline-1 focus:outline-element transition-all duration-500 text-sm focus:text-[16px] capitalize"
                {...register("brandName", {
                  minLength: {
                    value: 2,
                    message:
                      "minimum length of brand name should be 2 characters",
                  },
                  maxLength: {
                    value: 40,
                    message:
                      "maximum length of brand name should be 16 characters",
                  },
                })}
              />
              {errors.brandName && (
                <p className="text-red-500 text-sm">
                  {errors.brandName.message}
                </p>
              )}
            </div>

            <div className="w-1/2 flex flex-col gap-3">
              <label className="font-semibold">Price Range</label>
              <div className="relative w-full">
                <button
                  type="button"
                  onClick={handleTogglePriceRangeSelectionMenu}
                  className="border border-gray-200 px-5 py-3 rounded-lg transition-all duration-500 text-sm capitalize flex justify-between cursor-pointer w-full"
                >
                  {priceRange}
                  {isPriceRangeSelectionOpen ? (
                    <ChevronDown />
                  ) : (
                    <ChevronLeft />
                  )}
                </button>

                {isPriceRangeSelectionOpen && (
                  <ul className="absolute top-14 bg-white w-full border border-gray-200 rounded-lg left-0 z-10">
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
                onChange={handleKeywordValidation}
                maxLength={keywordsMaxLength}
                placeholder="Cotton t-shirt for men, men casual t-shirt..."
                className="border border-gray-200 px-3 py-3 rounded-lg focus:border-none focus:outline-1 focus:outline-element transition-all duration-500 text-sm focus:text-[16px] capitalize w-full"
              />

              {showKeywordsError && (
                <p className="text-red-500 text-sm">{keywordsError}</p>
              )}

              <div className="w-full flex items-center gap-3 flex-wrap">
                {keywords.map((word, idx) => {
                  return (
                    <span
                      key={idx}
                      className="border border-gray-200 w-fit px-4 rounded-full py-1 bg-gray-50 text-muted-foreground"
                    >
                      {word}
                    </span>
                  );
                })}
              </div>
              <p className="text-sm text-muted-foreground">
                separate with comma ,
              </p>
            </div>
          </div>

          <button
            onClick={handleFormValidation}
            type="button"
            className={`bg-element btn-engage py-3 font-semibold text-white text-lg rounded-lg ${isGenerating ? "cursor-not-allowed" : "cursor-pointer"}`}
            disabled={isGenerating}
          >
            {isGenerating ? "Generating..." : "Generate Now"}
          </button>

          {showConfirmationPopup && <Confirmation setShowConfirmationPopup={setShowConfirmationPopup} />}
        </div>
      </form>
    </div>
  );
};

export default ProductListingForm;
