export const BASE_URL = 'https://60s.viki.moe'

export const hotSearchList = [
  { name: '抖音热搜', url: `${BASE_URL}/v2/douyin` },
  { name: '小红书热点', url: `${BASE_URL}/v2/rednote` },
  { name: '哔哩哔哩热搜', url: `${BASE_URL}/v2/bili` },
  { name: '夸克热点', url: `${BASE_URL}/v2/quark` },
  { name: '微博热搜', url: `${BASE_URL}/v2/weibo` },
  { name: '百度热搜', url: `${BASE_URL}/v2/baidu/hot` },
  { name: '百度电视剧榜', url: `${BASE_URL}/v2/baidu/teleplay` },
  { name: '百度贴吧话题榜', url: `${BASE_URL}/v2/baidu/tieba` },
  { name: '头条热搜', url: `${BASE_URL}/v2/toutiao` },
  { name: '知乎话题榜', url: `${BASE_URL}/v2/zhihu` },
  { name: '懂车帝热搜', url: `${BASE_URL}/v2/dongchedi` },
  { name: 'Hacker News 热帖', url: `${BASE_URL}/v2/hacker-news/top` },
]

export const siteInfo = {
  title: 'HotSearch',
  description: '🔥 聚合全网热点榜单，快速了解每天发生的重要事情。',
  author: {
    name: 'LiuYuhe',
    url: 'https://liuyuhe666.github.io',
    email: 'cnliuyuhe@gmail.com',
    social: {
      twitter: 'https://twitter.com/cnliuyuhe',
      github: 'https://github.com/liuyuhe666',
    },
  },
  repo: 'https://github.com/liuyuhe666/hot-search-list',
}
