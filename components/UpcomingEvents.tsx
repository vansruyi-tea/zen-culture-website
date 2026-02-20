'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const events = [
  {
    id: 1,
    title: '陶瓷制作体验课',
    description: '学习传统陶瓷制作工艺，亲手制作属于自己的陶器',
    date: '4月15日',
    day: '周一',
    time: '14:00 - 17:00',
    location: '陶瓷艺术工作室',
    category: '陶瓷艺术',
    seats: 12,
    color: 'border-l-amber-500',
  },
  {
    id: 2,
    title: '茶道入门讲座',
    description: '了解茶道基本礼仪，学习泡茶技巧和品茶方法',
    date: '4月20日',
    day: '周六',
    time: '10:00 - 12:00',
    location: '茶修文化室',
    category: '茶修文化',
    seats: 20,
    color: 'border-l-emerald-500',
  },
  {
    id: 3,
    title: '中医养生工作坊',
    description: '学习中医养生知识，体验传统推拿和穴位按摩',
    date: '4月25日',
    day: '周四',
    time: '15:00 - 18:00',
    location: '中医养生馆',
    category: '中医养生',
    seats: 15,
    color: 'border-l-rose-500',
  },
  {
    id: 4,
    title: '自媒体运营公益课',
    description: '免费学习短视频制作、内容创作和账号运营',
    date: '5月5日',
    day: '周日',
    time: '13:00 - 16:00',
    location: '多媒体教室',
    category: '公益课程',
    seats: 30,
    color: 'border-l-blue-500',
  },
]

export default function UpcomingEvents() {
  return (
    <div>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-serif font-bold text-primary mb-4">
          近期活动
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          参与我们的文化活动，体验传统文化的魅力
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm ${event.color} border-l-4`}
          >
            <div className="flex flex-col h-full">
              {/* Event header */}
              <div className="mb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-2">
                      {event.category}
                    </span>
                    <h3 className="text-xl font-semibold text-primary group-hover:text-primary/90">
                      {event.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-primary">
                      {event.date}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {event.day}
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {event.description}
                </p>
              </div>

              {/* Event details */}
              <div className="mt-auto">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="mr-2 h-4 w-4">🕐</span>
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="mr-2 h-4 w-4">📍</span>
                    {event.location}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="mr-2 h-4 w-4">👥</span>
                    <span>剩余 {event.seats} 个名额</span>
                  </div>
                  <Link
                    href={`/events/${event.id}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    立即报名
                    <span className="ml-1 h-4 w-4">→</span>
                  </Link>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* View all events button */}
      <div className="mt-12 text-center">
        <Link
          href="/events"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
        >
          <span className="mr-2 h-4 w-4">📅</span>
          查看所有活动
        </Link>
      </div>
    </div>
  )
}