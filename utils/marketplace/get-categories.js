const amazonCategories = [
  "Electronics",
  "Mobiles & Accessories",
  "Computers & Accessories",
  "Home & Kitchen",
  "Home Improvement",
  "Furniture",
  "Fashion - Men",
  "Fashion - Women",
  "Fashion - Kids",
  "Beauty & Personal Care",
  "Health & Wellness",
  "Sports & Fitness",
  "Automotive",
  "Books",
  "Toys & Games",
  "Baby Products",
  "Grocery & Gourmet Foods",
  "Pet Supplies",
  "Other"
];

const myntraCategories = [
  "Men Clothing",
  "Women Clothing",
  "Kids Clothing",
  "Footwear",
  "Fashion Accessories",
  "Watches",
  "Jewellery",
  "Bags & Backpacks",
  "Luggage & Trolleys",
  "Beauty",
  "Personal Care",
  "Home Furnishing",
  "Other"
];

const flipkartCategories = [
  "Electronics",
  "Mobiles",
  "Mobile Accessories",
  "Computers",
  "Home & Kitchen",
  "Furniture",
  "Fashion - Men",
  "Fashion - Women",
  "Fashion - Kids",
  "Beauty & Grooming",
  "Sports & Fitness",
  "Automotive",
  "Books",
  "Toys",
  "Baby Care",
  "Grocery",
  "Pet Supplies",
  "Other"
];

const getCategory = (marketplace) => {
  if (!marketplace) {
    throw new Error(`missing argument: "marketplace" was not provided`);
  } else if (marketplace === "amazon") {
    return amazonCategories;
  } else if (marketplace === "flipkart") {
    return flipkartCategories;
  } else if (marketplace === "myntra") {
    return myntraCategories;
  } else {
    throw new Error(
      "invalid argument provided while fetching marketplace category \n valid arguments are: amazon, flipkart and myntra",
    );
  }
};

export default getCategory;