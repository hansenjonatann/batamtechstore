"use server";

import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export const GET = async (
  req: NextRequest,
  { params }: { params: { categoryId: string } }
) => {
  try {
    const categoryId = params.categoryId;
    const category = await db.category.findUnique({
      where: {
        id: categoryId,
      },

      include: {
        products: true,
      },
    });

    if (category) {
      return NextResponse.json({
        status: true,
        statusCode: 200,
        message: "Detail Category",
        data: category,
      });
    }

    if (!category) {
      return NextResponse.json({
        status: true,
        statusCode: 404,
        message: "Category Not Found",
      });
    }
  } catch (e) {
    return NextResponse.json({
      status: false,
      statusCode: 500,
      message: "Internal server error",
      error: e,
    });
  }
};
