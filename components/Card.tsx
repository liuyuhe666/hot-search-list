'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import LoadingSpinner from './LoadingSpinner'
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

export default function Card({ title, url }: CardProps) {
  const [items, setItems] = useState<Item[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const { data } = await res.json()
        setItems(data.map((item: Item) => ({
          title: item.title,
          link: item.link ?? item.url ?? '#',
        })))
        setIsLoading(false)
      }
      catch (error) {
        toast.error(`获取${title}失败，请稍后再试`)
        console.error(error)
      }
    }
    fetchData()
  }, [url, title])

  return (
    <div className="mb-4 cursor-pointer rounded-xl bg-white p-4 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl">
      <div className="mb-2 text-lg font-semibold text-gray-900">
        {title}
      </div>
      <div className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 flex h-80 flex-col overflow-y-auto scroll-smooth">
        {isLoading && <LoadingSpinner />}
        {items.map((item, index) => {
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
