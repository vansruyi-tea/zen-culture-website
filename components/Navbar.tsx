'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// 使用简单的文本代替图标，先确保基本功能正常
const navItems = [
  { name: '首页', href: '/' },
  { name: '李青忆', href: '/liqingyi' },
  { name: '陶瓷艺术', href: '/ceramic-art' },
  { name: '茶修文化', href: '/tea-culture' },
  { name: '中医养生', href: '/tcm-health' },
  { name: '公益课程', href: '/public-courses' },
  { name: '联系', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 safe-area-padding">
      <div className="container mx-auto flex h-14 md:h-16 items-center justify-between px-4">
        {/* Logo - 移动端简化 */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center touch-target">
            <span className="text-primary font-serif text-xl">禅</span>
          </div>
          <span className="font-serif text-lg font-semibold text-primary hidden xs:inline">
            禅意文化空间
          </span>
          <span className="font-serif text-sm font-semibold text-primary inline xs:hidden">
            禅意空间
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors touch-target"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground hover:bg-accent focus:outline-none md:hidden touch-target"
          aria-label={isOpen ? "关闭菜单" : "打开菜单"}
        >
          <div className="relative w-6 h-6">
            <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : ''}`} />
            <span className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu - 全屏覆盖 */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 遮罩层 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            
            {/* 菜单内容 */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-background z-50 md:hidden shadow-2xl safe-area-padding"
            >
              <div className="flex flex-col h-full">
                {/* 菜单头部 */}
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-serif text-xl">禅</span>
                    </div>
                    <span className="font-serif text-lg font-semibold text-primary">
                      禅意文化空间
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-accent touch-target"
                    aria-label="关闭菜单"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* 菜单项 */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center rounded-xl p-4 text-lg font-medium hover:bg-accent active:bg-accent/80 transition-colors touch-target"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* 菜单底部 */}
                <div className="p-4 border-t">
                  <div className="text-center text-sm text-muted-foreground">
                    <p>微信: shanger9561</p>
                    <p className="mt-1">互助共创 · 抱团共赢</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}