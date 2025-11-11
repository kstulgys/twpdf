import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

export const create = mutation({
  args: { body: v.string(), email: v.string(), reason: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("feedback", args);
    // await ctx.scheduler.runAfter(0, internal.telegram.sendMessage, {
    //   body: args.body,
    //   email: args.email,
    //   reason: args.reason,
    // });
  },
});
