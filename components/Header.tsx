import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Logo className="h-10 w-auto text-accent" />
        <span className="text-2xl font-bold">
          Cine<span className="text-accent">Surf</span>
        </span>
      </Link>
      <button className="rounded-md bg-accent px-4 py-2 font-medium cursor-pointer transition hover:brightness-110">
        Sign In
      </button>
    </header>
  );
}
