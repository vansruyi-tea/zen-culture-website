import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import WeChatShare from '@/components/WeChatShare'
import Link from 'next/link'
import { 
  Heart, 
  Leaf, 
  Brain, 
  Utensils, 
  Moon, 
  Sun, 
  Activity, 
  BookOpen,
  Calendar,
  Users,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'

export default function TCMHealthPage() {
  const principles = [
    {
      icon: <Heart className="h-5 w-5" />,
      title: "治未病",
      description: "预防为主，调理为先，在疾病发生前进行干预",
      color: "text-rose-600",
      bgColor: "bg-rose-50"
    },
    {
      icon: <Leaf className="h-5 w-5" />,
      title: "天人合一",
      description: "顺应自然规律，与天地同步作息",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title: "形神兼养",
      description: "身体与精神共同调理，达到身心和谐",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: <Utensils className="h-5 w-5" />,
      title: "药食同源",
      description: "食物即药物，通过饮食调理身体健康",
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    }
  ]

  const practices = [
    {
      title: "四季养生",
      description: "根据春夏秋冬四季特点，调整饮食起居",
      items: ["春养肝", "夏养心", "秋养肺", "冬养肾"],
      icon: "🌿"
    },
    {
      title: "时辰养生",
      description: "遵循十二时辰经络运行规律，合理安排作息",
      items: ["子时胆经", "午时心经", "酉时肾经", "亥时三焦"],
      icon: "⏰"
    },
    {
      title: "情志养生",
      description: "调节七情六欲，保持心态平和",
      items: ["喜伤心", "怒伤肝", "思伤脾", "忧伤肺"],
      icon: "😊"
    },
    {
      title: "运动养生",
      description: "传统养生功法，动静结合",
      items: ["太极拳", "八段锦", "五禽戏", "易筋经"],
      icon: "🧘"
    }
  ]

  const courses = [
    {
      title: "中医基础理论",
      description: "学习阴阳五行、脏腑经络等中医核心理论",
      duration: "8课时",
      level: "入门",
      features: ["阴阳学说", "五行理论", "脏腑功能", "经络系统"]
    },
    {
      title: "四季食疗养生",
      description: "掌握四季饮食调理方法，吃出健康",
      duration: "12课时",
      level: "初级",
      features: ["春季养肝", "夏季清心", "秋季润肺", "冬季补肾"]
    },
    {
      title: "传统养生功法",
      description: "学习太极拳、八段锦等传统养生运动",
      duration: "16课时",
      level: "中级",
      features: ["太极拳基础", "八段锦全套", "呼吸调息", "意念引导"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/10 wechat-optimized safe-area-padding">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-amber-500/5" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 md:mb-6">
              <Leaf className="h-3 w-3 md:h-4 md:w-4 mr-2" />
              李青忆中医养生体系
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4 md:mb-6">
              中医养生智慧
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              传承千年中医智慧，践行"治未病"养生理念，
              将康养文化与东方生活美学相融，为当代人打造身心同修的生活范式。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="#courses">
                <Button size="lg" className="rounded-xl bg-emerald-600 hover:bg-emerald-700">
                  <BookOpen className="mr-2 h-4 w-4" />
                  查看课程
                </Button>
              </Link>
              
              <Link href="/liqingyi">
                <Button size="lg" variant="outline" className="rounded-xl border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  了解李青忆
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3 md:mb-4">
                中医养生核心理念
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                李青忆秉持的中医养生智慧，融合传统与现代
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {principles.map((principle, index) => (
                <Card key={index} className="border hover:shadow-md transition-shadow">
                  <CardContent className="p-5 md:p-6">
                    <div className={`inline-flex rounded-lg ${principle.bgColor} p-3 mb-4`}>
                      <div className={principle.color}>
                        {principle.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3 md:mb-4">
                养生实践方法
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                系统化的中医养生实践体系
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {practices.map((practice, index) => (
                <Card key={index} className="border hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{practice.icon}</span>
                      <CardTitle className="text-xl font-serif text-primary">
                        {practice.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-sm">
                      {practice.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {practice.items.map((item, itemIndex) => (
                        <Badge key={itemIndex} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3 md:mb-4">
                养生课程体系
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                系统学习中医养生知识，掌握健康生活技能
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="border hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg font-semibold text-primary">
                        {course.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {course.level}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {course.duration}
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="text-sm font-medium text-primary mb-2">课程内容</h4>
                      <ul className="space-y-1">
                        {course.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-emerald-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-700">
                      立即报名
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-emerald-500/5 to-amber-500/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-emerald-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif text-primary">
                  学习中医养生的益处
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {[
                    { icon: "💪", title: "增强体质", desc: "提高免疫力，预防疾病" },
                    { icon: "😌", title: "调节情绪", desc: "保持心态平和，减少压力" },
                    { icon: "🌙", title: "改善睡眠", desc: "提高睡眠质量，恢复精力" },
                    { icon: "🍎", title: "合理饮食", desc: "科学搭配饮食，吃出健康" }
                  ].map((benefit, index) => (
                    <div key={index} className="text-center p-4">
                      <div className="text-3xl mb-3">{benefit.icon}</div>
                      <h4 className="font-semibold text-primary mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">
                  加入中医养生学习
                </CardTitle>
                <CardDescription>
                  与李青忆一起，学习中医养生智慧，打造健康生活方式
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-medium">微信：shanger9561</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="rounded-xl bg-emerald-600 hover:bg-emerald-700">
                    <BookOpen className="mr-2 h-4 w-4" />
                    咨询课程详情
                  </Button>
                  
                  <Button variant="outline" className="rounded-xl border-primary text-primary hover:bg-primary/10">
                    复制微信号
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground">
                  添加微信时请备注"中医养生"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* WeChat Share */}
      <WeChatShare 
        title="中医养生智慧 - 李青忆中医养生体系"
        description="传承千年中医智慧，践行'治未病'养生理念，学习四季养生、时辰养生、情志养生、运动养生。"
      />
    </div>
  )
}