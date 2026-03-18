"use client";
import React, { useEffect, useState } from "react";
import CreditCard from "@/components/shop/CreditCard";
import Link from "next/link";
import Script from "next/script";
import addCredit from "@/utils/user/credit/add";

const CreditShop = () => {
  const [planList, setPlanList] = useState([]);
  const fetchPlans = async () => {
    const res = await fetch("/api/plan/get");
    const r = await res.json();
    setPlanList(r.plans);
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handlePurchase = async (id) => {
    const orderId = await createOrder(id);

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      order_id: orderId,
      currency: "INR",

      handler: async function (response) {
        await verifyPayment(response, id);
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const verifyPayment = async (paymentData, planId) => {
    const res = await fetch("/api/razorpay/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    });

    const result = await res.json();

    if (result.success) {
      addCredit(planId)
      alert("Payment successful");
    } else {
      alert("Payment verification failed");
    }
  };

  const createOrder = async (planId) => {
    const res = await fetch("/api/razorpay/order/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ planId }),
    });
    const r = await res.json();
    return r.orderId;
  };
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <header className="md:px-16 md:py-5 flex items-center justify-between px-5 py-3 shadow-xs">
        <div>
          <h1 className="text-2xl font-semibold">Buy Credits</h1>
        </div>
        <Link href={"/dashboard"}>
          <h2 className="font-riot text-xl">
            <span className="text-[#3FBBEB]">List</span>
            <span className="text-element">IQ</span>
          </h2>
        </Link>
      </header>

      <main className="md:px-16 md:py-5 px-5 py-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-8">
          {planList
            ?.sort((a, b) => a.price - b.price)
            .map((item, idx) => {
              return (
                <div key={idx} onClick={() => handlePurchase(item._id)}>
                  <CreditCard amount={item?.amount} price={item?.price} />
                </div>
              );
            })}
        </div>
      </main>
    </>
  );
};

export default CreditShop;
