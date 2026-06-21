import Image from "next/image"

type Props = {
  title: string
  description: string
}

export default function EmptyView({ title, description }: Props) {
  return (
    <section className="flex flex-col items-center justify-center gap-10 py-24 text-center">
      <Image src="/illustrations/error-empty.svg" alt="" width={680} height={305} className="w-80 h-auto block" />
      <div className="flex flex-col gap-3 max-w-sm">
        <h2 className="text-2xl font-medium">{title}</h2>
        <p className="text-slate-400">{description}</p>
      </div>
    </section>
  )
}
