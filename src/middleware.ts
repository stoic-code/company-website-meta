import { NextResponse, NextRequest, NextFetchEvent } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  // AUTHENCTICATION MIDDLEWARE FOR ADMIN ROUTE
  const currentPath = req.nextUrl.pathname;

  if (currentPath.startsWith("/admin")) {
    const verifiedToken = await verifyAuth(req).catch((err) => {
      console.error(err.message);
    });

    if (!verifiedToken) {
      // if this an API request, respond with JSON
      if (currentPath.startsWith("/api/")) {
        const response = new NextResponse(
          JSON.stringify({ error: { message: "authentication required" } }),
          { status: 401 },
        );
        return response;
      }
      // otherwise, redirect to the set home page
      else {
        // Ignores the files path
        const response = NextResponse.redirect(req.nextUrl.origin);
        return response;
      }
    }
  }

  const response = NextResponse.next();
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
