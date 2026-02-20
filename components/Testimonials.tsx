'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: '张明',
    role: '陶瓷艺术爱好者',
    content: '在这里学习陶瓷制作，不仅学到了传统工艺，更找到了内心的平静。老师非常有耐心，环境也很舒适。',
    rating: 5,
    avatarColor: 'bg-amber-100',
    textColor: 'text-amber-600',
  },
  {
    id: 2,
    name: '李芳',
    role: '茶修文化学员',
    content: '茶道课程让我重新认识了茶文化，每一次泡茶都是一次心灵的洗礼。感谢老师的悉心指导！',
    rating: 5,
    avatarColor: 'bg-emerald-100',
    textColor: 'text-emerald-600',
  },
  {
    id: 3,
    name: '王强',
    role: '中医养生受益者',
    content: '通过中医养生课程，我学会了如何调理身体，现在感觉精力充沛，睡眠质量也大大提高了。',
    rating: 4,
    avatarColor: 'bg-rose-100',
    textColor: 'text-rose-600',
  },
  {
    id: 4,
    name: '陈静',
    role: '公益课程学员',
    content: '自媒体运营课程非常实用，老师讲解得很详细，让我从零开始学会了短视频制作和内容创作。',
    rating: 5,
    avatarColor: 'bg-blue-100',
    textColor: 'text-blue-600',
  },
  {
    id: 5,
    name: '刘伟',
    role: '社区成员',
    content: '微信社区氛围很好，大家都很热心分享。在这里认识了很多志同道合的朋友，一起学习成长。',
    rating: 5,
    avatarColor: 'bg-violet-100',
    textColor: 'text-violet-600',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-serif font-bold text-primary mb-4">
          学员评价
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          听听学员们分享他们的学习体验和收获
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Quote icon */}
        <div className="absolute -top-6 -left-6 hidden lg:block">
          <span className="h-12 w-12 text-primary/20 text-4xl">"</span>
        </div>

        {/* Testimonial content */}
        <div className="relative overflow-hidden rounded-2xl bg-card p-8 shadow-lg md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              {/* Rating */}
              <div className="mb-6 flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < testimonials[currentIndex].rating
                        ? 'text-amber-400'
                        : 'text-gray-200'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Content */}
              <blockquote className="mb-8">
                <p className="text-lg italic text-muted-foreground md:text-xl">
                  "{testimonials[currentIndex].content}"
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div
                  className={`mb-4 h-16 w-16 rounded-full ${testimonials[currentIndex].avatarColor} flex items-center justify-center`}
                >
                  <span className={`text-2xl font-serif ${testimonials[currentIndex].textColor}`}>
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-primary">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <span className="h-5 w-5 text-primary text-lg">←</span>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <span className="h-5 w-5 text-primary text-lg">→</span>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="mt-8 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-6 -right-6 hidden lg:block">
        <span className="h-12 w-12 text-primary/20 text-4xl rotate-180">"</span>
      </div>
    </div>
  )
}