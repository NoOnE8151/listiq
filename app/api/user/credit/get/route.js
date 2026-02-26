import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import Credit from "@/models/Credit";
import { connectDB } from "@/connections/connectdb";

export async function POST() {
  try {
    await connectDB();

    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const credit = await Credit.findOneAndUpdate(
      { userId },
      { $setOnInsert: { userId, balance: 30 } },
      { new: true, upsert: true }
    );

    return NextResponse.json(
      {
        success: true,
        credit,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Credit API Error:", error);

    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}