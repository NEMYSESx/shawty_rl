/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const reqBody = await req.json();
    const { name, email, password } = reqBody;
    const hashPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return NextResponse.json(
        { error: "email already taken" },
        { status: 409 }
      );
    }

    await db.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });
    return NextResponse.json({ message: "user created successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
