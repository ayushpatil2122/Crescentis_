import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, rolesHiringFor } = body;

    // Validate required fields (basic)
    if (!name || !email || !phone || !company || !rolesHiringFor) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const contact = await prisma.contactRequest.create({
      data: { name, email, phone, company, rolesHiringFor },
    });

    return NextResponse.json({ message: "Contact saved", contact }, { status: 201 });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
