import React from "react";

const CreditCard = ({ amount, price, highlight }) => {
  return (
    <div
      className={`relative rounded-xl p-6 bg-background 
      border border-gray-100 shadow-sm
      transition-all duration-200
      hover:shadow-xl hover:border-gray-100 cursor-pointer hover:-translate-y-1`}
    >
      {highlight && (
        <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-md bg-element text-white">
          Popular
        </span>
      )}

      {/* Top Section */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-element/10 p-2 rounded-lg">
          <img
            src="/assets/elements/coin.svg"
            alt="credit"
            className="w-8 h-8"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold">{amount} Credits</h2>
          <p className="text-xs opacity-60">Use across all tools</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex items-end justify-between">
        <div className="text-3xl font-bold">
          ₹{price}
        </div>

        <button
          className="bg-element px-4 py-2 w-1/3 text-white font-semibold rounded-lg text-sm cursor-pointer hover:bg-element-hover active:bg-element-active
          transition-all duration-200
          hover:brightness-110 active:scale-95"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default CreditCard;  