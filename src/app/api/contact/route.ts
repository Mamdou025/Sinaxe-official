import { randomBytes } from "crypto";
import { appendFile, mkdir, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

const ALLOWED_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/png",
  "image/jpeg",
]);
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const company = formData.get("company");
  const message = formData.get("message");
  const file = formData.get("document");
  const role = formData.get("role");

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !EMAIL_RE.test(email) ||
    typeof message !== "string" ||
    !message.trim()
  ) {
    return NextResponse.json(
      { error: "Please fill in your name, a valid email, and a message." },
      { status: 400 },
    );
  }

  const uploadsDir = path.join(process.cwd(), "uploads");
  await mkdir(uploadsDir, { recursive: true });

  let savedFileName: string | null = null;
  let originalFileName: string | null = null;

  if (file instanceof File && file.size > 0) {
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File is too large (max 10MB)." },
        { status: 400 },
      );
    }
    if (file.type && !ALLOWED_TYPES.has(file.type)) {
      return NextResponse.json(
        { error: "Unsupported file type. Use PDF, Word, or an image." },
        { status: 400 },
      );
    }
    const ext = path
      .extname(file.name)
      .slice(0, 10)
      .replace(/[^a-zA-Z0-9.]/g, "");
    savedFileName = `${Date.now()}-${randomBytes(6).toString("hex")}${ext}`;
    originalFileName = file.name;
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(path.join(uploadsDir, savedFileName), buffer);
  }

  const entry = {
    receivedAt: new Date().toISOString(),
    name: name.trim(),
    email: email.trim(),
    company: typeof company === "string" && company.trim() ? company.trim() : null,
    role: typeof role === "string" && role.trim() ? role.trim() : null,
    message: message.trim(),
    file: savedFileName,
    originalFileName,
  };
  await appendFile(
    path.join(uploadsDir, "submissions.jsonl"),
    JSON.stringify(entry) + "\n",
    "utf8",
  );

  return NextResponse.json({ ok: true });
}
