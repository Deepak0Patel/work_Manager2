import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";
export async function GET(request) {
  try {
    const authToken = request.cookies.get("authToken")?.value;
    const data = jwt.verify(authToken, process.env.JWT_KEY);
    const user = await User.findById(data._id).select("-password");
    return NextResponse.json(user);
  } catch (error) {
    // Handle JWT verification errors
    console.error("JWT verification error:", error);
    return NextResponse.error("Unauthorized", { status: 401 });
  }

  // const authToken = request.cookies.get("authToken")?.value;
  // console.log(authToken);
  // const data = jwt.verify(authToken, process.env.JWT_KEY);
  // console.log(data);
  // const user = await User.findById(data._id).select("-password");
  // //   console.log("test");
  // return NextResponse.json(user);
}
