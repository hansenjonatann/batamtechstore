"use server";

import { NextResponse, NextRequest } from "next/server";
import { PrismaClient, Product } from "@prisma/client";
import { v2 as cloudinary } from "cloudinary";
const db = new PrismaClient();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

export const GET = async (req: NextRequest) => {
  const page = Number(req.nextUrl.searchParams.get("page")) || 1;
  const limit = 10;
  try {
    const offset = (page - 1) * limit;
    const totalProduct = await db.product.count();
    const product = await db.product.findMany({
      include: {
        category: true,
      },

      skip: offset,
      take: limit,
    });

    if (product) {
      return NextResponse.json({
        status: true,
        statusCode: 200,
        message: "List of Paginate Product",
        data: product,
        paginate: {
          currentPage: page,
          total: totalProduct,
          limit: limit,
        },
      });
    }

    if (!product) {
      return NextResponse.json({
        status: false,
        statusCode: 400,
        message: "Failed to fetch List of Paginate Product",
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

export const POST = async (req: NextRequest) => {
  try {
    const body: Product = await req.json();
    const product = await db.product.create({
      data: {
        name: body.name,
        price: body.price,
        description: body.description,
        categoryId: body.categoryId,
        image: body.image,
      },
    });

    if (product) {
      return NextResponse.json({
        status: true,
        statusCode: 201,
        message: "Product create successfully",
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
  } catch (error) {
    return NextResponse.json({
      status: false,
      statusCode: 500,
      message: "Internal Server Error",
      error: error,
    });
  }
};
