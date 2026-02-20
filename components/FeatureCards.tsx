'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const features = [
  {
    name: '陶瓷艺术',
    description: '体验传统陶瓷制作工艺，感受泥土与火焰的艺术',
    href: '/ceramic-art',
    color: 'from-amber-500/20 to-amber-600/20',
    iconColor: 'text-amber-600',
    emoji: '🏺',
  },
  {
    name: '茶修文化',
    description: '学习茶道礼仪，品味茶香，修心养性',
    href: '/tea-culture',
    color: 'from-emerald-500/20 to-emerald-600/20',
    iconColor: 'text-emerald-600',
    emoji: '🍵',
  },
  {
    name: '中医养生',
    description: '了解中医养生智慧，学习健康生活方式',
    href: '/tcm-health',
    color: 'from-rose-500/20 to-rose-600/20',
    iconColor: 'text-rose-600',
    emoji: '🌿',
  },
  {
    name: '公益课程',
    description: '免费学习自媒体技能，赋能个人成长',
    href: '/public-courses',
    color: 'from-blue-500/20 to-blue-600/20',
    iconColor: 'text-blue-600',
    emoji: '👥',
  },
  {
    name: '知识分享',
    description: '阅读精选文章，学习传统文化知识',
    href: '/knowledge',
    color: 'from-violet-500/20 to-violet-600/20',
    iconColor: 'text-violet-600',
    emoji: '📚',
  },
  {
    name: '社区互动',
    description: '加入微信社区，与同好交流分享',
    href: '/community',
    color: 'from-cyan-500/20 to-cyan-600/20',
    iconColor: 'text-cyan-600',
    emoji: '💬',
  },
]

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <motion.div
          key={feature.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Link
            href={feature.href}
            className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
          >
            {/* Background gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
            
            <div className="relative">
              {/* Icon */}
              <div className="mb-4 inline-flex rounded-lg bg-background p-3">
                <span className={`text-2xl ${feature.iconColor}`}>
                  {feature.emoji}
                </span>
              </div>
              
              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold text-primary group-hover:text-primary/90">
                {feature.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
              
              {/* Arrow indicator */}
              <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                了解更多
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>
            
            {/* Hover effect border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors" />
          </Link>
        </motion.div>
      ))}
    </div>
  )
}