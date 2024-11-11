"use server";
import { auth } from "@/auth";

export const getDefaultLoginRedirect = async () => {
  const id = await auth();
  return `/${id?.user.id}`;
};
