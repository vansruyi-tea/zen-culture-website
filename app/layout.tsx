import type { Metadata } from 'next'
import { Inter, Noto_Serif_SC } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSerifSC = Noto_Serif_SC({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif-sc'
})

export const metadata: Metadata = {
  title: '青忆的禅意文化空间 - 李青忆引领的禅意生活体系',
  description: '李青忆：茶心映山海，她力振乡邦。禅茶文化传承者，乡村振兴践行者，公益自媒体赋能开创者。探索大师艺术、疗愈文化、药食康养、女性赋能、乡村振兴。',
  keywords: ['李青忆', '疗愈文化', '大师艺术', '药食康养', '女性赋能', '乡村振兴', '云翼共创', '公益自媒体', '禅意生活'],
  openGraph: {
    title: '青忆的禅意文化空间 - 李青忆引领的禅意生活体系',
    description: '李青忆：茶心映山海，她力振乡邦。禅茶文化传承者，乡村振兴践行者，公益自媒体赋能开创者。',
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: '青忆的禅意文化空间 - 李青忆引领的禅意生活体系',
    description: '李青忆：茶心映山海，她力振乡邦。禅茶文化传承者，乡村振兴践行者，公益自媒体赋能开创者。',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${notoSerifSC.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
        
        {/* 微信专用meta标签 */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="email=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* 防止微信调整字体大小 */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body {
              -webkit-text-size-adjust: 100% !important;
              text-size-adjust: 100% !important;
              -moz-text-size-adjust: 100% !important;
            }
            
            /* 优化微信内滚动 */
            html {
              -webkit-overflow-scrolling: touch;
            }
            
            /* 防止长按菜单 */
            * {
              -webkit-touch-callout: none;
              -webkit-user-select: none;
              user-select: none;
            }
            
            /* 允许文本选择 */
            p, h1, h2, h3, h4, h5, h6, span, a {
              -webkit-user-select: text;
              user-select: text;
            }
            
            /* 优化点击反馈 */
            a, button {
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
            }
          `
        }} />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}