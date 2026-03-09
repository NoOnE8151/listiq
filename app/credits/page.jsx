import React from "react";
import CreditCard from "@/components/shop/CreditCard";

const CreditShop = () => {
  return (
    <>
      <header className="md:px-16 md:py-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Buy Credits</h1>
        </div>
        <div>
          <h2 className="font-riot text-xl">
            <span>List</span>
            <span>IQ</span>
          </h2>
        </div>
      </header>

      <main className="md:px-16 md:py-5">
        <div className="border border-gray-100 grid grid-cols-3">
            <CreditCard />
        </div>
      </main>
    </>
  );
};

export default CreditShop;