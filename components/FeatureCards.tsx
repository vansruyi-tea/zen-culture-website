'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const features = [
  {
    name: '禅茶文化',
    description: '体验正念茶修，学习茶禅一味',
    href: '/tea-culture',
    emoji: '🍵'
  },
  {
    name: '陶瓷艺术',
    description: '学习传统陶瓷，感受泥土艺术',
    href: '/ceramic-art',
    emoji: '🏺'
  },
  {
    name: '中医养生',
    description: '了解中医智慧，实践健康生活',
    href: '/tcm-health',
    emoji: '🌿'
  },
  {
    name: '公益课程',
    description: '免费自媒体培训，赋能女性成长',
    href: '/public-courses',
    emoji: '👩‍🏫'
  },
  {
    name: '乡村振兴',
    description: '助农直播，数字赋能乡土产业',
    href: '/liqingyi#乡村振兴',
    emoji: '🌾'
  },
  {
    name: '加入我们',
    description: '微信社群，互助共创，共同成长',
    href: '/liqingyi#加入我们',
    emoji: '🤝'
  }
]

export default function FeatureCards() {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3">
          探索禅意生活
        </h2>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
          选择你感兴趣的领域，开始你的禅意生活之旅
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Link
              href={feature.href}
              className="group block bg-card rounded-xl p-5 border hover:border-primary/30 hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl">{feature.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-primary mb-2 group-hover:text-primary/90">
                    {feature.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Simple Call to Action */}
      <div className="text-center pt-4">
        <Link
          href="/liqingyi"
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          了解更多关于李青忆的使命
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}