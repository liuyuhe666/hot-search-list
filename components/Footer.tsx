import Link from 'next/link'

import { siteInfo } from '@/constants'

import { MyPhotoView } from './MyPhotoView'

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-gray-400">
      <div className="mx-auto max-w-screen-2xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">HotSearch</h3>
            <p className="text-sm">
              聚合全网热点榜单，快速了解每天发生的重要事情。
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-medium text-white">联系我</h4>
            <ul className="space-y-2 text-sm">
              <li>
                Email:
                <Link href={`mailto:${siteInfo.author.email}`}>{siteInfo.author.email}</Link>
              </li>
              <li>
                GitHub:
                <Link href={siteInfo.author.github} target="_blank">{siteInfo.author.github}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-medium text-white">赞助我</h4>
            <MyPhotoView src="/buy-me-a-coffee.png" alt="Buy me a coffee" width={200} height={200} />
          </div>
        </div>
        <div className="mt-10 pt-6 text-center text-sm">
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          HotSearch. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
