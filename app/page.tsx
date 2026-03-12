import Card from '@/components/Card'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { hotSearchList } from '@/constants'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      <Header />
      <main className="mx-auto mt-18 max-w-screen-2xl p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {hotSearchList.map(({ name, url }) => (
            <Card key={name} title={name} url={url} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
