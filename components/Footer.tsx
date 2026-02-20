import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-serif text-xl">禅</span>
              </div>
              <span className="font-serif text-2xl font-semibold text-primary">
                禅意文化空间
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              探索禅意生活，体验传统文化，共享心灵宁静
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-lg"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-lg"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-lg"
                aria-label="YouTube"
              >
                📺
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速导航</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  首页
                </Link>
              </li>
              <li>
                <Link
                  href="/ceramic-art"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  陶瓷艺术
                </Link>
              </li>
              <li>
                <Link
                  href="/tea-culture"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  茶修文化
                </Link>
              </li>
              <li>
                <Link
                  href="/tcm-health"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  中医养生
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="h-4 w-4 text-muted-foreground">📱</span>
                <span className="text-sm text-muted-foreground">+86 138 0000 0000</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-4 w-4 text-muted-foreground">✉️</span>
                <span className="text-sm text-muted-foreground">contact@zen-culture.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="h-4 w-4 text-muted-foreground mt-0.5">📍</span>
                <span className="text-sm text-muted-foreground">
                  北京市朝阳区禅意文化路88号
                </span>
              </li>
            </ul>
          </div>

          {/* WeChat Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4">微信社区</h3>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                扫码加入我们的微信社区，获取最新活动信息
              </p>
              <div className="bg-white p-2 rounded-lg inline-block">
                <div className="h-32 w-32 bg-gray-200 flex items-center justify-center rounded">
                  <span className="text-gray-400 text-sm">微信二维码</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} 禅意文化空间. 保留所有权利.
            </p>
            <div className="mt-4 flex space-x-6 text-sm text-muted-foreground md:mt-0">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                隐私政策
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                服务条款
              </Link>
              <Link href="/sitemap" className="hover:text-primary transition-colors">
                网站地图
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}