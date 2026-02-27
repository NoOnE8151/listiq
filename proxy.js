import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isDashboardRoute = createRouteMatcher(['/dashboard(.*)'])
const isApiRoute = createRouteMatcher(['/api(.*)'])
const isAuthRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/'])

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth()

  // If visiting auth routes and user IS signed in → redirect to dashboard
  if (isAuthRoute(req) && userId) {
    const url = req.nextUrl.clone()
    url.pathname = '/dashboard'
    return Response.redirect(url)
  }

  // Protect dashboard routes
  if (isDashboardRoute(req)) {
    await auth.protect()
  }

  // Protect API routes
  if (isApiRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}