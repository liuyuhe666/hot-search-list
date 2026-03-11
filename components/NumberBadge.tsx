export default function NumberBadge({ number }: { number: number }) {
  const colors: Record<number, string> = {
    1: 'text-amber-500 font-semibold',
    2: 'text-slate-400 font-semibold',
    3: 'text-orange-400 font-semibold',
  }

  const colorClass = colors[number] ?? 'text-gray-400'

  return (
    <span
      className={`w-7 shrink-0 text-right tabular-nums ${colorClass}`}
    >
      {number}
    </span>
  )
}
