import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const POST = async (req: NextRequest) => {
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
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 }
    );
  }
};
