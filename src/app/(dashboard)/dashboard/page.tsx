import type { Metadata } from "next"

import { headers } from "next/headers"
import { redirect } from "next/navigation"

import { auth } from "@/lib/server/auth"

export const metadata: Metadata = {
  title: "Dashboard",
}

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    return redirect("/sign-in")
  }

  return (
    <div className="p-4">
      <div>Dashboard</div>
    </div>
  )
}
