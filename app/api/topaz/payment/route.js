import { NextResponse } from "next/server";
import { processTopazPayment } from "@/app/lib/topaz";

export async function POST(request) {
  try {
    const payload = await request.json();
    const response = await processTopazPayment(payload);
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      {
        ErrorCode: "Failed",
        MessageDescription: error?.message || "Topaz payment error.",
      },
      { status: 500 }
    );
  }
}
