import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

const handleGetRequest = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories, { status: 200 }));
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
// comment
export const GET = handleGetRequest;

