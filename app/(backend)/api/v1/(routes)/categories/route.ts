import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export const dynamic = "force-dynamic";

export const GET = async () => {
  try {
    const categories = await db.category.findMany({
      include: {
        products: true,
      },
    });

    if (categories) {
      return NextResponse.json({
        status: true,
        statusCode: 200,
        message: "Fetch All Categories",
        data: categories,
      });
    }

    if (!categories) {
      return NextResponse.json({
        status: false,
        statusCode: 400,
        message: "Failed to Fetch Data Categories",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: false,
      statusCode: 500,
      message: "Internal Server Error",
      error: error,
    });
  }
};
