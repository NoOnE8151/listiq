import Credit from "@/models/Credit";
import { NextResponse } from "next/server";
import { connectDB } from "@/connections/connectdb";
import Plan from "@/models/Plan";
import { auth } from "@clerk/nextjs/server";

export async function POST(request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { planId } = await request.json();

    await connectDB();

    // get purchased plan
    const plan = await Plan.findById(planId);
    if (!plan) {
      return NextResponse.json(
        { success: false, message: "Plan not found" },
        { status: 404 }
      );
    }

    // increment user credits
    const updatedCred = await Credit.findOneAndUpdate(
      { userId },
      { $inc: { balance: plan.amount } },
      { new: true, upsert: true }
    );

    return NextResponse.json({
      success: true,
      credits: updatedCred.balance,
    });

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        message: "internal server error",
      },
      {
        status: 500,
      }
    );
  }
}