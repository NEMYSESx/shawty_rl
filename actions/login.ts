"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas/validation";
import { signIn } from "@/auth";
import { getDefaultLoginRedirect } from "@/data/getUserId";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "@/lib/tokens";
import { getUserByEmail } from "@/data/user";
import { sendVerificationEmail } from "@/lib/mail";

export const login = async (
  values: z.infer<typeof LoginSchema>,
  callbackUrl?: string | null
) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }
  const { email, password } = validatedFields.data;
  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email donot exist" };
  }

  if (!existingUser.emailVerified) {
    const verficationToken = await generateVerificationToken(
      existingUser.email
    );

    await sendVerificationEmail(verficationToken.email, verficationToken.token);

    return { success: "confirmation email sent" };
  }
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || (await getDefaultLoginRedirect()),
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }
  return { success: "user created" };
};
