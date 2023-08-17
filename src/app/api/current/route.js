// import { NextResponse } from "next/server";
// import { User } from "@/models/user";
// const jwt = require("jsonwebtoken");
// export async function GET(request) {
//   try {
//     const authToken = request.cookies.get("authToken")?.value;

//     const data = jwt.verify(authToken, process.env.JWT_KEY);

//     const user = await User.findById(data._id).select("-password");

//     return NextResponse.json(user);
//   } catch (error) {
//     return NextResponse.json(
//       {
//         message: "unauthorized",
//       },
//       { status: 404 }
//     );
//   }
// }
