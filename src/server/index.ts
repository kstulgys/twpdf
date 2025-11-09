"use server";

import { RequestBody } from "~/utils/types";

const DOC_API_URL = process.env.DOC_API_URL!;

export async function generatePdf(props: RequestBody) {
  const response = await fetch(DOC_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(props),
  });

  if (!response.ok) throw new Error(`${props.type} generation failed`);

  // Return base64 string to client
  const arrayBuffer = await response.arrayBuffer();
  const base64 = Buffer.from(arrayBuffer).toString("base64");

  return base64;
}

const env = {
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN!,
  TW_PDF_BOT_CHAT_ID: process.env.TW_PDF_BOT_CHAT_ID!,
};

export async function sendFeedback({
  body,
  email,
  reason,
}: {
  body: string;
  email: string;
  reason: string;
}) {
  await telegramApi("sendMessage", {
    chat_id: env.TW_PDF_BOT_CHAT_ID,
    text: JSON.stringify({ body, email, reason }, null, 2),
  });
}

async function telegramApi<T>(
  method: string,
  body: Record<string, unknown>
): Promise<T> {
  const res = await fetch(
    `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/${method}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Telegram API ${method} failed: ${res.status} ${text}`);
  }
  return (await res.json()) as T;
}
