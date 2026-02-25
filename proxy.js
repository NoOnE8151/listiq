import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isDashboardRoute = createRouteMatcher(['/dashboard(.*)'])
const isApiRoute = createRouteMatcher(['/api(.*)'])
const isAuthRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/'])

export default clerkMiddleware(async (auth, req) => {
  // If visiting /dashboard and not authenticated → redirect to sign-in
  if (isDashboardRoute(req)) {
    await auth.protect() // automatically redirects to sign-in if not signed in
  }

  // protecting api routes
  if (isApiRoute(req)) {
    await auth.protect()
  }

  // If visiting /sign-in or /sign-up and user **is** signed in → send to /dashboard
  if (isAuthRoute(req)) {
    const { isAuthenticated, redirectToSignIn, redirectToSignUp } = await auth()
    if (isAuthenticated) {
      const url = req.nextUrl.clone()
      url.pathname = '/dashboard'
      return Response.redirect(url)
    }
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and static assets
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}