"use server";

import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export const GET = async (
  req: NextRequest,
  { params }: { params: { productId: string } }
) => {
  try {
    const id = params.productId;
    if (id) {
      const product = await db.product.delete({
        where: {
          id: id,
        },
      });

      if (product) {
        return NextResponse.json({
          status: true,
          statusCode: 200,
          message: "Product deleted",
          data: product,
        });
      }

      if (!product) {
        return NextResponse.json({
          status: false,
          statusCode: 400,
          message: "Something went wrong",
        });
      }
    }

    if (!id) {
      return NextResponse.json({
        status: false,
        statusCode: 404,
        message: "Product Not Found",
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
