'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/20 py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <span className="mr-2">✨</span>
              欢迎来到禅意文化空间
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block font-serif">禅意生活，</span>
              <span className="block font-serif text-primary/80">心灵归宿</span>
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              在这里，我们探索传统文化的精髓，体验陶瓷艺术的魅力，
              学习茶修文化的智慧，了解中医养生的奥秘。
              让我们一起在快节奏的生活中，寻找内心的宁静与平衡。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/public-courses"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                查看公益课程
                <span className="ml-2">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-primary px-8 py-3 text-sm font-medium text-primary shadow-sm hover:bg-primary/10 transition-all"
              >
                加入微信社区
              </Link>
            </div>
          </motion.div>
          
          {/* Right Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-square max-w-lg overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mb-6 inline-block rounded-full bg-white/20 p-6 backdrop-blur-sm">
                    <span className="text-6xl font-serif text-white">☯</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">
                    阴阳和谐
                  </h3>
                  <p className="text-white/80">
                    传统与现代的完美融合
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-primary/10" />
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-secondary/20" />
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 right-10 hidden lg:block"
            >
              <div className="h-16 w-16 rounded-full bg-accent/30 backdrop-blur-sm" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1 }}
              className="absolute -bottom-4 left-10 hidden lg:block"
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 backdrop-blur-sm" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="h-8 w-px bg-primary/30" />
      </motion.div>
    </section>
  )
}