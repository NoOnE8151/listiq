import Credit from "@/models/Credit";
import { NextResponse } from "next/server";
import { connectDB } from "@/connections/connectdb";
import { auth } from "@clerk/nextjs/server";

export async function POST() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();
    
    // deduct 10 credits
    const updatedCred = await Credit.findOneAndUpdate(
      { userId },
      { $inc: { balance: -10 } },
      { new: true }
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