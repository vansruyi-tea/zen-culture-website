import HeroSection from '@/components/HeroSection'
import FeatureCards from '@/components/FeatureCards'
import WeChatShare from '@/components/WeChatShare'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Heart, Target, Globe } from 'lucide-react'

export default function Home() {
  const coreValues = [
    {
      icon: <Heart className="h-5 w-5" />,
      title: "文化传承",
      description: "禅茶文化 · 陶瓷艺术 · 中医养生",
      color: "text-rose-600",
      bgColor: "bg-rose-50"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "公益赋能",
      description: "女性成长 · 自媒体培训 · 实战陪跑",
      color: "text-violet-600",
      bgColor: "bg-violet-50"
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "乡村振兴",
      description: "助农直播 · 产业闭环 · 康养基地",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "云翼共创",
      description: "互助共创 · 抱团共赢 · 扎根乡土",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    }
  ]

  return (
    <div className="flex flex-col wechat-optimized">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Core Values */}
      <section className="py-12 md:py-16 bg-background safe-area-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                核心价值
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                从文化传承到乡村振兴，构建完整的禅意生活生态
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-4 md:p-6 border hover:shadow-md transition-shadow text-center"
                >
                  <div className={`inline-flex rounded-lg ${value.bgColor} p-3 mb-4`}>
                    <div className={value.color}>
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8 md:mt-10">
              <Link href="/liqingyi">
                <Button variant="outline" className="rounded-xl border-primary text-primary hover:bg-primary/10">
                  了解完整使命
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Cards - 简化版 */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/10 safe-area-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                探索禅意生活
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                选择你感兴趣的领域，开始你的禅意生活之旅
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  title: "禅茶文化",
                  description: "体验正念茶修，学习茶禅一味",
                  href: "/tea-culture",
                  emoji: "🍵"
                },
                {
                  title: "陶瓷艺术",
                  description: "学习传统陶瓷，感受泥土艺术",
                  href: "/ceramic-art",
                  emoji: "🏺"
                },
                {
                  title: "中医养生",
                  description: "了解中医智慧，实践健康生活",
                  href: "/tcm-health",
                  emoji: "🌿"
                },
                {
                  title: "公益课程",
                  description: "免费自媒体培训，赋能女性成长",
                  href: "/public-courses",
                  emoji: "👩‍🏫"
                },
                {
                  title: "乡村振兴",
                  description: "助农直播，数字赋能乡土产业",
                  href: "/liqingyi#乡村振兴",
                  emoji: "🌾"
                },
                {
                  title: "加入我们",
                  description: "微信社群，互助共创，共同成长",
                  href: "/liqingyi#加入我们",
                  emoji: "🤝"
                }
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group bg-card rounded-xl p-5 md:p-6 border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{item.emoji}</div>
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-semibold text-primary mb-2 group-hover:text-primary/90">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/5 to-secondary/5 safe-area-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-2xl p-6 md:p-8 border shadow-sm">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3">
                立即加入云翼共创联盟
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                互助共创 · 抱团共赢 · 扎根乡土 · 翼起翱翔
              </p>
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                  <span className="text-sm font-medium">微信：shanger9561</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/liqingyi" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 rounded-xl">
                      了解李青忆
                    </Button>
                  </Link>
                  
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('shanger9561');
                      alert('微信号已复制到剪贴板');
                    }}
                    className="w-full sm:w-auto"
                  >
                    <Button variant="outline" className="w-full sm:w-auto rounded-xl border-primary text-primary hover:bg-primary/10">
                      复制微信号
                    </Button>
                  </button>
                </div>
              </div>
            </div>
          </div>
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