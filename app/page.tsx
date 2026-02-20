import HeroSection from '@/components/HeroSection'
import FeatureCards from '@/components/FeatureCards'
import GalleryPreview from '@/components/GalleryPreview'
import UpcomingEvents from '@/components/UpcomingEvents'
import Testimonials from '@/components/Testimonials'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Users, Mountain, Heart, Target } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Li Qingyi Introduction */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                李青忆：茶心映山海 · 她力振乡邦
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                扎根云滇厚土的新时代女性引领者，中华禅茶文化传承者，
                乡村振兴战略践行者，公益自媒体赋能体系开创者。
              </p>
              <Link href="/liqingyi">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                  了解更多 →
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-background p-6 rounded-lg border shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Mountain className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">文化传承</h3>
                <p className="text-sm text-muted-foreground">
                  禅茶文化 · 陶瓷艺术 · 中医养生 · 非遗传承
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">公益赋能</h3>
                <p className="text-sm text-muted-foreground">
                  女性成长 · 自媒体培训 · 实战陪跑 · 导师体系
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">乡村振兴</h3>
                <p className="text-sm text-muted-foreground">
                  助农直播 · 产业闭环 · 康养基地 · 共创模式
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">云翼共创</h3>
                <p className="text-sm text-muted-foreground">
                  互助共创 · 抱团共赢 · 扎根乡土 · 翼起翱翔
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Cards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              探索禅意生活
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              在快节奏的现代生活中，寻找内心的宁静与平衡
            </p>
          </div>
          <FeatureCards />
        </div>
      </section>
      
      {/* Gallery Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryPreview />
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <UpcomingEvents />
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials />
        </div>
      </section>
    </div>
  )
}