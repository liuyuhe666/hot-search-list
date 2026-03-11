import { siteInfo } from '@/constants'

export default function Header() {
  return (
    <header className="bg-slate-900 text-white">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold">
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl">🔥</span>
            <h1 className="text-2xl font-bold">HotSearch</h1>
          </a>
        </div>
        <a
          href={siteInfo.repo}
          target="_blank"
          className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:opacity-75"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-current"
          >
            <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.1 3.29 9.42 7.86 10.95.57.11.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.87-1.55-3.87-1.55-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.03 1.78 2.7 1.27 3.35.97.1-.75.4-1.27.73-1.56-2.56-.29-5.25-1.29-5.25-5.72 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.19a11 11 0 0 1 2.88-.39c.98 0 1.97.13 2.88.39 2.2-1.5 3.17-1.19 3.17-1.19.63 1.59.23 2.77.11 3.06.74.81 1.19 1.85 1.19 3.11 0 4.44-2.69 5.42-5.26 5.71.41.36.77 1.07.77 2.15 0 1.55-.01 2.79-.01 3.17 0 .3.21.67.79.55A11.53 11.53 0 0 0 23.5 12C23.5 5.66 18.35.5 12 .5Z" />
          </svg>
          Star on GitHub
        </a>
      </div>
    </header>
  )
}
