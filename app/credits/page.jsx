import React from "react";
import CreditCard from "@/components/shop/CreditCard";
import Link from "next/link";

const CreditShop = () => {
  return (
    <>
      <header className="md:px-16 md:py-5 flex items-center justify-between px-5 py-3 shadow-xs">
        <div>
          <h1 className="text-2xl font-semibold">Buy Credits</h1>
        </div>
        <Link href={'/dashboard'}>
          <h2 className="font-riot text-xl">
            <span className="text-[#3FBBEB]">List</span>
            <span className="text-element">IQ</span>
          </h2>
        </Link>
      </header>

      <main className="md:px-16 md:py-5 px-5 py-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-8">
            <CreditCard amount={100} price={299} />
            <CreditCard amount={200} price={499} />
            <CreditCard amount={300} price={599} />
            <CreditCard amount={400} price={699} />
            <CreditCard amount={500} price={799} />
            <CreditCard amount={600} price={899} />
        </div>
      </main>
    </>
  );
};

export default CreditShop;