import { connectDB } from "@/connections/connectdb";
import { NextResponse } from "next/server";
import Plan from "@/models/Plan";

export async function GET() {
  try {
    await connectDB();
    const planList = await Plan.find().lean();
    return NextResponse.json(
      {
        success: true,
        message: "successfully fetched all plans",
        plans: planList,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "internal server error" },
      { status: 500 },
    );
  }
}
