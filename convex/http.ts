import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";

const http = httpRouter();

type TelegramPayload = {
  update_id: number;
  message: {
    message_id: number;
    from: {
      id: number;
      is_bot: false;
      first_name: string;
      username: string;
      language_code: string;
    };
    chat: {
      id: number;
      first_name: string;
      username: string;
      type: "private";
    };
    date: number;
    text: string;
  };
};

http.route({
  path: `/telegram/webhook`,
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    // const text = await request.text();

    // const text = await request.text();

    // const json = JSON.parse(text) as TelegramPayload;

    // console.log({ json });

    // Return response with headers that allow null origin
    return new Response(null, {
      status: 200,
      headers: new Headers({
        "Access-Control-Allow-Origin": "null",
        "Content-Type": "text/plain",
      }),
    });
  }),
});

export default http;
