import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.nextauth.token;

    // Admin routes protection
    if (pathname.startsWith("/admin")) {
      // Add admin check logic here when you implement roles
      // For now, we'll just check if user is authenticated
      if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        // Protected routes that require authentication
        if (
          pathname.startsWith("/dashboard") ||
          pathname.startsWith("/profile")
        ) {
          return !!token;
        }

        // Admin routes
        if (pathname.startsWith("/admin")) {
          return !!token; // Add role check here later
        }

        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/admin/:path*"],
};
