"use client"

import { authClient } from "@/lib/client/auth"

export function SignIn() {
  function socialSignIn(provider: "github" | "google") {
    authClient.signIn.social({
      provider,
      callbackURL: "/dashboard",
      errorCallbackURL: `/sign-in?provider=${provider}`,
    })
  }
  return (
    <div className="p-4 inline-flex flex-col gap-4">
      <button
        type="button"
        onClick={() => socialSignIn("github")}
        className="w-full max-w-fit bg-neutral-200 px-2.5 py-1.5 text-sm rounded-md"
      >
        Continue with GitHub
      </button>
      <button
        type="button"
        onClick={() => socialSignIn("google")}
        className="w-full max-w-fit bg-neutral-200 px-2.5 py-1.5 text-sm rounded-md"
      >
        Continue with Google
      </button>
    </div>
  )
}
