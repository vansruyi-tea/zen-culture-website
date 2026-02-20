'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Palette, 
  Tea, 
  HeartPulse, 
  Users, 
  BookOpen, 
  MessageCircle,
  Mountain,
  Target,
  Globe,
  Sparkles,
  Leaf,
  Coffee
} from 'lucide-react'

const features = [
  {
    name: '禅茶一味',
    description: '体验正念茶修，学习茶禅文化精髓，在茶香中寻找内心宁静',
    href: '/tea-culture',
    icon: <Tea className="h-6 w-6" />,
    color: 'from-emerald-500/20 to-emerald-600/20',
    iconColor: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    tag: '文化传承',
    stats: '500+ 学员'
  },
  {
    name: '陶瓷艺术',
    description: '学习传统陶瓷制作，感受泥土与火焰的艺术对话',
    href: '/ceramic-art',
    icon: <Palette className="h-6 w-6" />,
    color: 'from-amber-500/20 to-amber-600/20',
    iconColor: 'text-amber-600',
    bgColor: 'bg-amber-50',
    tag: '非遗传承',
    stats: '省级大师'
  },
  {
    name: '中医养生',
    description: '学习中医养生智慧，实践"治未病"的健康生活方式',
    href: '/tcm-health',
    icon: <HeartPulse className="h-6 w-6" />,
    color: 'from-rose-500/20 to-rose-600/20',
    iconColor: 'text-rose-600',
    bgColor: 'bg-rose-50',
    tag: '康养智慧',
    stats: '千年传承'
  },
  {
    name: '女性赋能',
    description: '免费自媒体实战培训，助力女性数字时代成长',
    href: '/public-courses',
    icon: <Users className="h-6 w-6" />,
    color: 'from-violet-500/20 to-violet-600/20',
    iconColor: 'text-violet-600',
    bgColor: 'bg-violet-50',
    tag: '公益赋能',
    stats: '1000+ 女性'
  },
  {
    name: '乡村振兴',
    description: '自媒体+助农直播，数字流量赋能乡土产业发展',
    href: '/liqingyi#乡村振兴',
    icon: <Mountain className="h-6 w-6" />,
    color: 'from-green-500/20 to-green-600/20',
    iconColor: 'text-green-600',
    bgColor: 'bg-green-50',
    tag: '产业兴邦',
    stats: '助农增收'
  },
  {
    name: '云翼共创',
    description: '互助共创社群，抱团共赢的女性成长生态',
    href: '/liqingyi#云翼共创',
    icon: <Globe className="h-6 w-6" />,
    color: 'from-blue-500/20 to-blue-600/20',
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    tag: '社群共建',
    stats: '联盟成员'
  },
  {
    name: '知识文库',
    description: '精选传统文化文章，系统学习东方生活美学',
    href: '/knowledge',
    icon: <BookOpen className="h-6 w-6" />,
    color: 'from-indigo-500/20 to-indigo-600/20',
    iconColor: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    tag: '智慧传承',
    stats: '100+ 文章'
  },
  {
    name: '禅意社区',
    description: '加入微信社群，与同修交流分享，共同成长',
    href: '/community',
    icon: <MessageCircle className="h-6 w-6" />,
    color: 'from-cyan-500/20 to-cyan-600/20',
    iconColor: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    tag: '心灵归宿',
    stats: '活跃社群'
  },
  {
    name: '康养基地',
    description: '乡村康养旅居项目，体验禅意生活方式',
    href: '/liqingyi#康养基地',
    icon: <Leaf className="h-6 w-6" />,
    color: 'from-lime-500/20 to-lime-600/20',
    iconColor: 'text-lime-600',
    bgColor: 'bg-lime-50',
    tag: '身心同修',
    stats: '共创项目'
  }
]

export default function FeatureCards() {
  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-medium">李青忆引领的禅意生活体系</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
          探索禅意生活 · 赋能美好人生
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          从文化传承到公益赋能，从乡村振兴到社群共建，
          构建"文化铸魂、公益立行、产业兴邦"的完整生态
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
          >
            <Link
              href={feature.href}
              className="group relative block h-full overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-xl"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/10 transition-colors duration-300" />
              
              <div className="relative">
                {/* Icon with animated background */}
                <div className="mb-5">
                  <div className={`inline-flex rounded-xl ${feature.bgColor} p-3 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={feature.iconColor}>
                      {feature.icon}
                    </div>
                  </div>
                </div>
                
                {/* Tag */}
                <div className="mb-3">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {feature.tag}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="mb-3 text-xl font-serif font-semibold text-primary group-hover:text-primary/90">
                  {feature.name}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="font-medium">{feature.stats}</span>
                  </div>
                  
                  {/* Arrow indicator */}
                  <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    探索更多
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
              </div>
              
              {/* Subtle shine effect */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center pt-8"
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border">
          <div className="text-left">
            <h3 className="text-lg font-semibold text-primary mb-1">
              加入禅意生活之旅
            </h3>
            <p className="text-sm text-muted-foreground">
              从文化体验到公益赋能，从个人成长到乡村振兴
            </p>
          </div>
          <Link
            href="/liqingyi"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
          >
            了解李青忆的完整使命
            <svg
              className="ml-2 h-4 w-4"
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
          </Link>
        </div>
      </motion.div>
    </div>
  )
}