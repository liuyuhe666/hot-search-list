import Link from 'next/link'

import NumberBadge from './NumberBadge'

interface CardProps {
  title: string
  url: string
}

interface Item {
  title: string
  link: string
  url?: string
}

export default async function Card({ title, url }: CardProps) {
  const jsonData = await fetch(url).then(res => res.json())
  const { data } = jsonData
  const items: Item[] = data.map((item: Item) => ({
    title: item.title,
    link: item.link ?? item.url ?? '#',
  }))

  return (
    <div className="mb-4 rounded-xl border bg-white p-4 shadow-sm">
      <div className="mb-2 text-lg font-semibold text-gray-900">
        {title}
      </div>
      <div className="flex flex-col">
        {items.slice(0, 10).map((item, index) => {
          return (
            <Link
              key={item.title}
              href={item.link}
              target="_blank"
              className="flex items-center gap-3 rounded px-2 py-1.5 transition-colors hover:bg-gray-100"
            >
              <NumberBadge number={index + 1} />
              <p className="truncate text-sm text-gray-800">{item.title}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
