import { auth } from "./auth";

export const publicRoutes = ["/", "/auth/new-verification"];
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

export const getDefaultLoginRedirect = async () => {
  const id = await auth();
  return `/${id?.user.id}`;
};

export const apiAuthPrefix = "/api/auth";
// export const DEFAULT_LOGIN_REDIRECT = `/${url}`;
