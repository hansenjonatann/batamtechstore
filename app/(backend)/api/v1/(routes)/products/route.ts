import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export const dynamic = "force-dynamic";

export const GET = async () => {
  try {
    const products = await db.product.findMany({
      include: {
        category: true,
      },
    });

    if (products) {
      return NextResponse.json({
        status: true,
        statusCode: 200,
        message: "List of All Products",
        data: products,
      });
    }

    if (!products) {
      return NextResponse.json({
        status: false,
        statusCode: 400,
        message: "Failed to fetch data",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: false,
      statusCode: 500,
      message: "Internal Server error",
      error: error,
    });
  }
};
