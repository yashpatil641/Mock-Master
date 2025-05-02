import { NextResponse, type NextRequest } from "next/server";
import { auth } from "@/../auth";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const isLoginPage = request.nextUrl.pathname === "/login";
	console.log(request.nextUrl.pathname)
  
  // If the user is authenticated and trying to access the login page,
  // redirect them to the dashboard/home page
  if (session?.user && isLoginPage) {
    return NextResponse.redirect(new URL("/", request.url));``
  }

  // For protected routes, check if user is authenticated
  const isProtectedRoute = request.nextUrl.pathname.startsWith('/dashboard') || 
                          request.nextUrl.pathname.startsWith('/api');
  
  if (isProtectedRoute && !session?.user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow the request to continue
  return NextResponse.next();
}