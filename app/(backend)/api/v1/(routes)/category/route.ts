import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export const dynamic = "force-dynamic";

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
      message: "Internal Server error",
      error: error,
    });
  }
};
