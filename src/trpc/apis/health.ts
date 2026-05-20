import { createRouter, publicProcedure } from "@/trpc/base"

export const healthRouter = createRouter({
  get: publicProcedure.query(() => {
    return {
      status: 200,
      message: "TRPC connection is healthy.",
    }
  }),
})
