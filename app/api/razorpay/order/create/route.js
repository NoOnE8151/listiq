import { NextResponse } from "next/server";
import Plan from "@/models/Plan";
import { connectDB } from "@/connections/connectdb";

export async function POST(request) {
  try {
    await connectDB();
    const { planId } = await request.json();
    const planToPurchase = await Plan.findOne({ _id: planId });

    const auth = Buffer.from(`${process.env.RAZORPAY_KEY}:${process.env.RAZORPAY_SECRET}`).toString("base64");
    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        amount: planToPurchase.price * 100,
        currency: "INR",
      }),
    });

    const data = await response.json();
    console.log('order created successfully', data);

    return NextResponse.json({ success: true, orderId: data.id, message: 'successfully created order' });
  } catch (err) {
    console.error(err);
    NextResponse.json(
      {
        success: false,
        message: "internal server error",
      },
      {
        status: 500,
      },
    );
  }
}
