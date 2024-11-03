"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas/validation";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  console.log("hii1");
  const validatedFields = RegisterSchema.safeParse(values);
  console.log("hii2");

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
    console.log("hii3");
  }
  const { name, email, password } = validatedFields.data;
  const hashPassword = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findUnique({ where: { email } });

  if (existingUser) {
    return { error: "email already in use" };
    console.log("hii4");
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });
  console.log("hii5");

  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);
  console.log("email sent");
  return { success: "Confirmation email sent" };
};
