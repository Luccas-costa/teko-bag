import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/webhooks/user",
    "/api/email-compra",
    "teko-bag.com",
    "teko-bag.com/api/webhooks/user",
    "teko-bag.com/api/email-compra",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
