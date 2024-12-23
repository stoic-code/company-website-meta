import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";

import { nanoid } from "nanoid";
import { SignJWT } from "jose";
import { getJwtSecretKey, USER_TOKEN } from "@/lib/constants";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  try {
    await connectDB();
    // Check if the user entered the username and password
    if (!body.username || !body.password) {
      return new NextResponse("Username and Password is required.", {
        status: 401,
      });
    }

    const user = await Admin.findOne({ username: body.username });

    // console.log(user);

    if (user) {
      const isPasswordValid = await bcrypt.compare(
        body.password,
        user.password || "",
      );
      if (isPasswordValid) {
        const token = await new SignJWT({ body })
          .setProtectedHeader({ alg: "HS256" })
          .setJti(nanoid())
          .setIssuedAt()
          .setExpirationTime("2h")
          .sign(new TextEncoder().encode(getJwtSecretKey()));
        const response = new NextResponse("Logged in successfully.", {
          status: 200,
        });
        response.cookies.set(USER_TOKEN, token, {
          httpOnly: true,
          maxAge: 60 * 60 * 2, // 2 hours in seconds
        });
        return response;
      } else {
        return new NextResponse("Invalid username or password.", {
          status: 403,
        });
      }
    }

    return new NextResponse("Invalid username or password.", {
      status: 403,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
