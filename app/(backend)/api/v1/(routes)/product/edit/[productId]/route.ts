"use server";

import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { productId: string } }
) => {
  try {
    const body = await req.json();
    const id = params.productId;
    if (id) {
      const product = await db.product.update({
        where: {
          id: id,
        },
        data: {
          name: body.name,
          description: body.description,
          price: body.price,
        },
      });

      if (product) {
        return NextResponse.json({
          status: true,
          statusCode: 200,
          message: "Product updated",
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
