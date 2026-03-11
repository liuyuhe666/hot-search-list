import Card from '@/components/Card'

export default function Home() {
  const url = 'https://60s.viki.moe'
  const hotSearchMap = {
    '抖音热搜': `${url}/v2/douyin`,
    '小红书热点': `${url}/v2/rednote`,
    '哔哩哔哩热搜': `${url}/v2/bili`,
    '夸克热点': `${url}/v2/quark`,
    '微博热搜': `${url}/v2/weibo`,
    '百度热搜': `${url}/v2/baidu/hot`,
    '百度电视剧榜': `${url}/v2/baidu/teleplay`,
    '百度贴吧话题榜': `${url}/v2/baidu/tieba`,
    '头条热搜': `${url}/v2/toutiao`,
    '知乎话题榜': `${url}/v2/zhihu`,
    '懂车帝热搜': `${url}/v2/dongchedi`,
    'Hacker News 热帖': `${url}/v2/hacker-news/top`,
  }
  return (
    <div className="min-h-screen bg-black">
      <main className="mx-auto max-w-490 p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {Object.entries(hotSearchMap).map(([name, url]) => (
            <Card key={name} title={name} url={url} />
          ))}
        </div>
      </main>
    </div>
  )
}
