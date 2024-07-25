"use server";

import { NextResponse, NextRequest } from "next/server";
import { Category, PrismaClient } from "@prisma/client";
const db = new PrismaClient();
export const PATCH = async (
  req: NextRequest,
  { params }: { params: { categoryId: string } }
) => {
  try {
    const body: Category = await req.json();
    const categoryId = params.categoryId;
    const category = await db.category.update({
      where: {
        id: categoryId,
      },
      data: {
        name: body.name,
        description: body.name,
      },
    });

    if (category) {
      return NextResponse.json({
        status: true,
        statusCode: 200,
        message: "Update Category Success",
        data: category,
      });
    }

    if (!category) {
      return NextResponse.json({
        status: true,
        statusCode: 400,
        message: "Something went wrong",
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
