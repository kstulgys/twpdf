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

// u1SB@SMcz%2V2VivC85q
