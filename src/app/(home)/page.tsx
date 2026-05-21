import Link from "next/link"

export default function Page() {
  return (
    <div className="p-4">
      Welcome to Snivia!
      <div className="mt-4">
        <div className="text-xs text-neutral-400 uppercase font-semibold tracking-wide">
          Links
        </div>
        <div className="mt-2 flex flex-col">
          <Link
            href="/sign-in"
            className="max-w-fit text-sm font-medium text-neutral-900"
          >
            /sign-in
          </Link>
          <Link
            href="/dashboard"
            className="max-w-fit text-sm font-medium text-neutral-900"
          >
            /dashboard
          </Link>
          <Link
            href="/health/trpc"
            className="max-w-fit text-sm font-medium text-neutral-900"
          >
            /health/trpc
          </Link>
        </div>
      </div>
    </div>
  )
}
