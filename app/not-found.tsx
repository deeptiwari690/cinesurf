import ErrorView from "@/components/ui/ErrorView"
import { TmdbError } from "@/lib/tmdb/tmdb"

export default function NotFound() {
  return <ErrorView error={new TmdbError(404, "Not found")} />
}
