"use server";

import { NextResponse, NextRequest } from "next/server";
import { Category, PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export const GET = async (req: NextRequest) => {
  const page = Number(req.nextUrl.searchParams.get("page")) || 1;
  const limit = 10;
  try {
    const offset = (page - 1) * limit;
    const totalCategory = await db.category.count();
    const category = await db.category.findMany({
      include: {
        products: true,
      },
      skip: offset,
      take: limit,
    });

    if (category) {
      return NextResponse.json({
        status: true,
        statusCode: 200,
        message: "List of Category",
        data: category,
        pagination: {
          limit: limit,
          total: totalCategory,
          currentPage: page,
        },
      });
    }

    if (!category) {
      return NextResponse.json({
        status: false,
        statusCode: 400,
        message: "Failed to fetch category data",
        data: null,
      });
    }
  } catch (e) {
    return NextResponse.json({
      status: false,
      statusCode: 500,
      message: "Internal Server Error",
      error: e,
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body: Category = await req.json();
    const category = await db.category.create({
      data: {
        name: body.name,
        description: body.description,
      },
    });

    if (category) {
      return NextResponse.json({
        status: true,
        statusCode: 200,
        message: "Category created",
        data: category,
      });
    }

    if (!category) {
      return NextResponse.json({
        status: false,
        statusCode: 400,
        message: "Something went wrong",
      });
    }
  } catch (e) {
    return NextResponse.json({
      status: false,
      statusCode: 500,
      message: "Internal Server Error",
      error: e,
    });
  }
};
