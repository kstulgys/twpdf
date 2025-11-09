import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  feedback: defineTable({
    body: v.string(),
    email: v.string(),
    reason: v.string(),
  }),
});
