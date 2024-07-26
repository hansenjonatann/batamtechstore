"use server";

import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

// Handling GET request for categories
export const GET = async (req: NextRequest) => {
  const page = Number(req.nextUrl.searchParams.get("page")) || 1;
  const limit = 10;
  try {
    const offset = (page - 1) * limit;
    const totalCategory = await db.category.count();
    const categories = await db.category.findMany({
      include: {
        products: true,
      },
      skip: offset,
      take: limit,
    });

    if (categories.length) {
      return NextResponse.json({
        status: true,
        statusCode: 200,
        message: "List of Categories",
        data: categories,
        pagination: {
          limit: limit,
          total: totalCategory,
          currentPage: page,
        },
      });
    }

    return NextResponse.json({
      status: false,
      statusCode: 400,
      message: "Failed to fetch category data",
      data: null,
    });
  } catch (error) {
    return NextResponse.json({
      status: false,
      statusCode: 500,
      message: "Internal Server Error",
      error: (error as Error).message,
    });
  }
};

// Handling POST request for categories
export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
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

    return NextResponse.json({
      status: false,
      statusCode: 400,
      message: "Something went wrong",
    });
  } catch (error) {
    return NextResponse.json({
      status: false,
      statusCode: 500,
      message: "Internal Server Error",
      error: (error as Error).message,
    });
  }
};

// Handling PATCH request for categories
export const PATCH = async (
  req: NextRequest,
  { params }: { params: { categoryId: string } }
) => {
  try {
    const body = await req.json();
    const categoryId = params.categoryId;
    const category = await db.category.update({
      where: {
        id: categoryId,
      },
      data: {
        name: body.name,
        description: body.description,
      },
    });

    if (category) {
      return NextResponse.json({
        status: true,
        statusCode: 200,
        message: "Category updated successfully",
        data: category,
      });
    }

    return NextResponse.json({
      status: false,
      statusCode: 400,
      message: "Something went wrong",
    });
  } catch (error) {
    return NextResponse.json({
      status: false,
      statusCode: 500,
      message: "Internal Server Error",
      error: (error as Error).message,
    });
  }
};
