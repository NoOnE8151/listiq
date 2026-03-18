import { NextResponse } from "next/server";
import { connectDB } from "@/connections/connectdb";
import Credit from "@/models/Credit";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
    try {
        const {userId} = await auth();
        await connectDB();

        if (!userId) {
            return NextResponse.json({
                success: false,
                message: 'user is not logged in',
                state: 'unauthorized'
            })
        }

        const credit = await Credit.findOne({ userId })

        if(credit.balance < 10) {
            return NextResponse.json({
                success: false,
                message: 'Not enough credits',
                state: 'insufficient'
            })
        }

        return NextResponse.json({
            success: true,
            state: 'verified'
        })
    } catch (error) {
        console.log(error); 
        return NextResponse.json({ 
            success: false,
            message: 'internal server error'
         },{
            status: 500
         })
    }
}