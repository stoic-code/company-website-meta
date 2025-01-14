import type { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { USER_TOKEN, getJwtSecretKey } from "./constants";

interface UserJwtPayload {
  jti: string;
  iat: number;
}

/**
 * Verifies the user's JWT token and returns its payload if it's valid.
 */
export async function verifyAuth(req: NextRequest) {
  const token = req.cookies.get(USER_TOKEN)?.value;

  if (!token) throw new Error("Missing user token.");

  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey()),
    );
    return verified.payload as UserJwtPayload;
  } catch (err) {
    throw new Error("Your token has expired.");
  }
}

/**
 * Expires the user token cookie
 */
export function expireUserCookie(res: NextResponse) {
  res.cookies.set(USER_TOKEN, "", { httpOnly: true, maxAge: 0 });
  return res;
}
