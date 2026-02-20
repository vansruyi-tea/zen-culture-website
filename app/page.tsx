import HeroSection from '@/components/HeroSection'
import FeatureCards from '@/components/FeatureCards'
import GalleryPreview from '@/components/GalleryPreview'
import UpcomingEvents from '@/components/UpcomingEvents'
import Testimonials from '@/components/Testimonials'
import WeChatShare from '@/components/WeChatShare'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Users, Mountain, Heart, Target } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col wechat-optimized">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Li Qingyi Introduction - 移动端优化 */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/5 to-secondary/5 safe-area-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm mb-3 md:mb-4">
                <span className="font-medium">李青忆引领</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3 md:mb-4 px-4">
                茶心映山海 · 她力振乡邦
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 px-4 leading-relaxed">
                扎根云滇厚土的新时代女性引领者，中华禅茶文化传承者，
                乡村振兴战略践行者，公益自媒体赋能体系开创者。
              </p>
              <Link href="/liqingyi" className="inline-block">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-xl touch-button w-full max-w-xs">
                  了解更多 →
                </Button>
              </Link>
            </div>
            
            {/* 移动端卡片网格 */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              <div className="bg-background p-4 md:p-6 rounded-xl border mobile-card-shadow text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 text-primary mb-3 md:mb-4">
                  <Mountain className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2">文化传承</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-tight">
                  禅茶文化 · 陶瓷艺术 · 中医养生 · 非遗传承
                </p>
              </div>
              
              <div className="bg-background p-4 md:p-6 rounded-xl border mobile-card-shadow text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 text-primary mb-3 md:mb-4">
                  <Heart className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2">公益赋能</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-tight">
                  女性成长 · 自媒体培训 · 实战陪跑 · 导师体系
                </p>
              </div>
              
              <div className="bg-background p-4 md:p-6 rounded-xl border mobile-card-shadow text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 text-primary mb-3 md:mb-4">
                  <Target className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2">乡村振兴</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-tight">
                  助农直播 · 产业闭环 · 康养基地 · 共创模式
                </p>
              </div>
              
              <div className="bg-background p-4 md:p-6 rounded-xl border mobile-card-shadow text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 text-primary mb-3 md:mb-4">
                  <Users className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2">云翼共创</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-tight">
                  互助共创 · 抱团共赢 · 扎根乡土 · 翼起翱翔
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Cards */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/20 safe-area-padding">
        <div className="container mx-auto px-4">
          <FeatureCards />
        </div>
      </section>
      
      {/* Gallery Preview */}
      <section className="py-12 md:py-16 safe-area-padding">
        <div className="container mx-auto px-4">
          <GalleryPreview />
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="py-12 md:py-16 bg-muted/30 safe-area-padding">
        <div className="container mx-auto px-4">
          <UpcomingEvents />
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-12 md:py-16 safe-area-padding">
        <div className="container mx-auto px-4">
          <Testimonials />
        </div>
      </section>
      
      {/* 微信分享组件 */}
      <WeChatShare />
      
      {/* 微信分享提示 */}
      <div className="fixed top-20 right-4 z-30 md:hidden">
        <div className="bg-background/90 backdrop-blur-sm rounded-xl p-3 border shadow-lg max-w-xs animate-pulse">
          <p className="text-xs text-primary font-medium">点击右上角 ···</p>
          <p className="text-xs text-muted-foreground mt-1">分享给朋友</p>
        </div>
      </div>
    </div>
  )
}