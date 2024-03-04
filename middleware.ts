import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ['/','/api/webhook/clerk',"/sign-up","/sign-up/verify-email-address" ],
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: ['/api/webhook/clerk']

});
 
export const config = {

  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};