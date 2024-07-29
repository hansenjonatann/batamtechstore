import { NextResponse } from "next/server";
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

    return NextResponse.json({
      status: true,
      statusCode: 200,
      message: "List of All Products",
      data: products,
    });
  } catch (error: unknown) {
    let errorMessage = "Internal Server Error";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error("Error fetching products:", error);
    return NextResponse.json({
      status: false,
      statusCode: 500,
      message: errorMessage,
      error: errorMessage,
    });
  }
};
