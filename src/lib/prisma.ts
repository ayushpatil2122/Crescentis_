// src/lib/prisma.ts
import { PrismaClient } from "@/generated/prisma"; // ✅ Correct import path

export const prisma = new PrismaClient();
