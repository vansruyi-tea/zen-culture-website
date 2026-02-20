'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const galleryItems = [
  {
    id: 1,
    title: '青花瓷系列',
    category: '陶瓷艺术',
    description: '传统青花瓷工艺，展现东方美学',
    imageColor: 'bg-blue-100',
  },
  {
    id: 2,
    title: '茶道仪式',
    category: '茶修文化',
    description: '传统茶道表演，体验禅意生活',
    imageColor: 'bg-emerald-100',
  },
  {
    id: 3,
    title: '中医推拿',
    category: '中医养生',
    description: '传统推拿手法，促进气血流通',
    imageColor: 'bg-rose-100',
  },
  {
    id: 4,
    title: '公益讲座',
    category: '公益课程',
    description: '自媒体运营技巧分享',
    imageColor: 'bg-amber-100',
  },
  {
    id: 5,
    title: '书法展示',
    category: '传统文化',
    description: '传统书法艺术，修身养性',
    imageColor: 'bg-stone-100',
  },
  {
    id: 6,
    title: '香道体验',
    category: '茶修文化',
    description: '传统香道文化，静心养神',
    imageColor: 'bg-violet-100',
  },
]

export default function GalleryPreview() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  const selectedGalleryItem = selectedItem !== null 
    ? galleryItems.find(item => item.id === selectedItem)
    : galleryItems[currentIndex]

  return (
    <div>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-serif font-bold text-primary mb-4">
          作品展示
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          欣赏我们的精选作品，感受传统文化的魅力
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Preview */}
        <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`h-full w-full ${galleryItems[currentIndex].imageColor} flex items-center justify-center`}
          >
            <div className="text-center p-8">
              <span className="inline-block rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-primary mb-4">
                {galleryItems[currentIndex].category}
              </span>
              <h3 className="text-3xl font-serif font-bold text-primary mb-4">
                {galleryItems[currentIndex].title}
              </h3>
              <p className="text-lg text-primary/80">
                {galleryItems[currentIndex].description}
              </p>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm hover:bg-white transition-colors"
            aria-label="Previous"
          >
            <span className="h-5 w-5 text-primary text-lg">←</span>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm hover:bg-white transition-colors"
            aria-label="Next"
          >
            <span className="h-5 w-5 text-primary text-lg">→</span>
          </button>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 gap-4">
          {galleryItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setCurrentIndex(index)}
              className={`aspect-square rounded-xl overflow-hidden relative group ${
                currentIndex === index ? 'ring-2 ring-primary ring-offset-2' : ''
              }`}
            >
              <div className={`h-full w-full ${item.imageColor} flex items-center justify-center`}>
                <div className="text-center p-4">
                  <span className="text-xs font-medium text-primary/70 mb-2 block">
                    {item.category}
                  </span>
                  <h4 className="font-semibold text-primary">{item.title}</h4>
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              
              {/* Indicator */}
              {currentIndex === index && (
                <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary" />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="mt-12 text-center">
        <Link
          href="/gallery"
          className="inline-flex items-center justify-center rounded-lg border border-primary px-8 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition-all"
        >
          查看完整画廊
          <span className="ml-2 h-4 w-4 text-lg">→</span>
        </Link>
      </div>

      {/* Modal for detailed view */}
      <AnimatePresence>
        {selectedItem !== null && selectedGalleryItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full rounded-2xl bg-white p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition-colors"
                aria-label="Close"
              >
                <span className="h-5 w-5 text-gray-600 text-lg">×</span>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className={`aspect-square rounded-xl ${selectedGalleryItem.imageColor} flex items-center justify-center`}>
                  <div className="text-center p-8">
                    <span className="text-4xl font-serif">🎨</span>
                  </div>
                </div>
                <div>
                  <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
                    {selectedGalleryItem.category}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                    {selectedGalleryItem.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {selectedGalleryItem.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    更多详细信息将在完整画廊页面展示，包括制作过程、材料说明和艺术家介绍。
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}