import superjson from "superjson"

import { cache } from "react"
import { initTRPC } from "@trpc/server"

const t = initTRPC.create({ transformer: superjson })

export const createRouter = t.router
export const publicProcedure = t.procedure

export const createContext = cache(async () => {
  return { foo: "bar" }
})
