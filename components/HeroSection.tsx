'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Leaf, Coffee } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-8"
          >
            <Sparkles className="h-4 w-4" />
            <span>欢迎来到青忆的禅意文化空间</span>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-serif font-bold tracking-tight text-primary sm:text-5xl md:text-6xl"
          >
            <span className="block">茶心映山海</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl font-normal text-muted-foreground mt-2">
              她力振乡邦
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            新时代女性引领者 · 禅茶文化传承者
            <br />
            乡村振兴践行者 · 公益自媒体赋能开创者
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/liqingyi" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-base rounded-xl bg-primary hover:bg-primary/90">
                了解李青忆
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            
            <Link href="/public-courses" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-base rounded-xl border-primary text-primary hover:bg-primary/10">
                公益课程
              </Button>
            </Link>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif font-bold text-primary mb-1">500+</div>
              <div className="text-xs md:text-sm text-muted-foreground">茶修学员</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif font-bold text-primary mb-1">1000+</div>
              <div className="text-xs md:text-sm text-muted-foreground">赋能女性</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif font-bold text-primary mb-1">省级</div>
              <div className="text-xs md:text-sm text-muted-foreground">陶瓷艺术大师</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-serif font-bold text-primary mb-1">云翼</div>
              <div className="text-xs md:text-sm text-muted-foreground">共创联盟</div>
            </div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="h-6 w-px bg-primary/30" />
              <span className="text-xs text-muted-foreground">探索更多</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-10 hidden lg:block">
        <Leaf className="h-24 w-24" />
      </div>
      
      <div className="absolute bottom-20 right-10 opacity-10 hidden lg:block">
        <Coffee className="h-24 w-24" />
      </div>
    </section>
  )
}