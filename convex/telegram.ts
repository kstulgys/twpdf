"use node";

import { action, internalAction } from "./_generated/server";
import { v } from "convex/values";

const env = {
  TELEGRAM_BOT_TOKEN: "",
  TW_PDF_BOT_CHAT_ID: 0,
};

export const sendMessage = internalAction({
  args: { body: v.string(), email: v.string(), reason: v.string() },
  handler: async (ctx, args) => {
    await telegramApi("sendMessage", {
      chat_id: env.TW_PDF_BOT_CHAT_ID,
      text: JSON.stringify(args),
    });
  },
});

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

export const send = action({
  args: { body: v.string(), email: v.string(), reason: v.string() },
  handler: async (ctx, args) => {
    await telegramApi("sendMessage", {
      chat_id: env.TW_PDF_BOT_CHAT_ID,
      text: JSON.stringify(args, null, 2),
    });
  },
});
