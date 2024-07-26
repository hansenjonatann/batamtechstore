"use server";

import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { v2 as cloudinary } from "cloudinary";

const db = new PrismaClient();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

export const GET = async (req: NextRequest) => {
  const page = Number(req.nextUrl.searchParams.get("page")) || 1;
  const limit = 4;
  try {
    const offset = (page - 1) * limit;
    const totalProduct = await db.product.count();
    const products = await db.product.findMany({
      include: {
        category: true,
      },
      skip: offset,
      take: limit,
    });

    if (products.length) {
      return NextResponse.json({
        status: true,
        statusCode: 200,
        message: "List of Paginated Products",
        data: products,
        paginate: {
          currentPage: page,
          total: totalProduct,
          limit: limit,
        },
      });
    }

    return NextResponse.json({
      status: false,
      statusCode: 400,
      message: "Failed to fetch List of Paginated Products",
    });
  } catch (error) {
    return NextResponse.json({
      status: false,
      statusCode: 500,
      message: "Internal Server error",
      error: (error as Error).message,
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const form = await req.formData();
    const name = form.get("name") as string;
    const description = form.get("description") as string;
    const price = Number(form.get("price"));
    const categoryId = form.get("categoryId") as string;
    const imageFile = form.get("image") as File;

    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadToCloudinary = () => {
      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "products",
            public_id: imageFile.name,
            resource_type: "image",
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );
        uploadStream.end(buffer);
      });
    };

    const response: any = await uploadToCloudinary();

    const product = await db.product.create({
      data: {
        name,
        description,
        price,
        categoryId,
        imageUrl: response.secure_url,
      },
    });

    if (product) {
      return NextResponse.json({
        status: true,
        statusCode: 201,
        message: "Product created successfully",
        data: product,
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
