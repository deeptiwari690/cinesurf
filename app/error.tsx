'use client'

import ErrorView from "@/components/ui/ErrorView"

type Props = {
  error: Error
  reset: () => void
}

export default function HomeError({ error, reset }: Props) {
  return <ErrorView error={error} reset={reset} />
}
