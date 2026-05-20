import { createRouter } from "@/trpc/base"
import { healthRouter } from "@/trpc/apis/health"

export const appRouter = createRouter({
  health: healthRouter,
})

export type AppRouter = typeof appRouter
