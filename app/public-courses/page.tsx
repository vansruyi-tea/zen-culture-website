import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import WeChatShare from '@/components/WeChatShare'
import Link from 'next/link'
import { 
  Video, 
  Mic, 
  Users, 
  Target, 
  Award, 
  CheckCircle,
  Calendar,
  Clock,
  BookOpen,
  MessageCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Heart
} from 'lucide-react'

export default function PublicCoursesPage() {
  const courses = [
    {
      title: "短视频口播实战",
      description: "从0到1掌握短视频口播核心技能，打造个人IP",
      level: "入门",
      duration: "8课时",
      format: "直播+录播",
      features: ["镜头感训练", "口播脚本写作", "拍摄技巧", "剪辑基础"],
      icon: <Video className="h-5 w-5" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "直播运营全攻略",
      description: "掌握直播全流程运营，实现流量变现",
      level: "进阶",
      duration: "12课时",
      format: "直播实战",
      features: ["直播策划", "互动技巧", "产品讲解", "数据复盘"],
      icon: <Mic className="h-5 w-5" />,
      color: "text-violet-600",
      bgColor: "bg-violet-50"
    },
    {
      title: "全域流量矩阵",
      description: "构建视频号+公众号+社群的全域流量生态",
      level: "高级",
      duration: "16课时",
      format: "系统课程",
      features: ["视频号运营", "公众号写作", "社群管理", "流量转化"],
      icon: <TrendingUp className="h-5 w-5" />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    }
  ]

  const benefits = [
    {
      icon: "🎯",
      title: "全程实战陪跑",
      description: "拒绝空谈理论，手把手实战教学"
    },
    {
      icon: "👩‍🏫",
      title: "导师认证体系",
      description: "学成后可升级为认证导师，反哺赋能"
    },
    {
      icon: "🤝",
      title: "互助共创社群",
      description: "加入云翼共创联盟，抱团成长"
    },
    {
      icon: "💰",
      title: "完全免费公益",
      description: "所有课程全免费，真正公益赋能"
    }
  ]

  const curriculum = [
    {
      week: "第一周",
      title: "基础入门",
      topics: ["自媒体认知", "账号定位", "内容规划", "设备准备"]
    },
    {
      week: "第二周",
      title: "内容创作",
      topics: ["脚本写作", "拍摄技巧", "剪辑入门", "封面设计"]
    },
    {
      week: "第三周",
      title: "运营提升",
      topics: ["数据分析", "互动策略", "粉丝维护", "内容优化"]
    },
    {
      week: "第四周",
      title: "商业变现",
      topics: ["流量转化", "产品对接", "直播带货", "私域运营"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/10 wechat-optimized safe-area-padding">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-blue-500/5" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 md:mb-6">
              <Heart className="h-3 w-3 md:h-4 md:w-4 mr-2" />
              李青忆公益赋能体系
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4 md:mb-6">
              公益自媒体赋能课程
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              全国首个女性专属公益自媒体赋能平台，全程实战陪跑，
              手把手带领零基础女性解锁自媒体核心技能，抓住数字时代发展红利。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="#courses">
                <Button size="lg" className="rounded-xl bg-violet-600 hover:bg-violet-700">
                  <BookOpen className="mr-2 h-4 w-4" />
                  查看课程
                </Button>
              </Link>
              
              <Link href="/liqingyi">
                <Button size="lg" variant="outline" className="rounded-xl border-violet-600 text-violet-600 hover:bg-violet-50">
                  了解发起人
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3 md:mb-4">
                课程特色优势
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                李青忆开创的"教学-考核-导师-裂变"全链路公益赋能体系
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border hover:shadow-md transition-shadow">
                  <CardContent className="p-5 md:p-6 text-center">
                    <div className="text-3xl mb-3">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3 md:mb-4">
                核心课程体系
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                系统化课程设计，满足不同阶段学习需求
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="border hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`rounded-lg ${course.bgColor} p-2`}>
                        <div className={course.color}>
                          {course.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-semibold text-primary">
                          {course.title}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          {course.level}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-sm">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        {course.duration}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {course.format}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="text-sm font-medium text-primary mb-2">学习内容</h4>
                      <ul className="space-y-1">
                        {course.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-violet-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full rounded-xl bg-violet-600 hover:bg-violet-700">
                      立即报名
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-3 md:mb-4">
                四周学习计划
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                系统化学习路径，从入门到精通
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {curriculum.map((item, index) => (
                <Card key={index} className="border hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{item.week}</Badge>
                      <div className="text-xs text-muted-foreground">第{index + 1}周</div>
                    </div>
                    <CardTitle className="text-lg font-semibold text-primary">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-violet-500 mr-2" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-violet-500/5 to-blue-500/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-violet-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif text-primary">
                  学员成功案例
                </CardTitle>
                <CardDescription>
                  "一人学成、百人受益、千人同行"的良性裂变生态
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      name: "张女士",
                      role: "全职妈妈",
                      achievement: "3个月粉丝破万，月入过万",
                      quote: "从零开始学习，现在可以独立运营账号"
                    },
                    {
                      name: "李女士",
                      role: "企业职员",
                      achievement: "副业收入超主业",
                      quote: "公益课程改变了我的人生轨迹"
                    },
                    {
                      name: "王女士",
                      role: "创业者",
                      achievement: "建立自己的品牌",
                      quote: "云翼共创联盟让我找到了创业伙伴"
                    }
                  ].map((story, index) => (
                    <Card key={index} className="border">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center">
                            <Users className="h-5 w-5 text-violet-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary">{story.name}</h4>
                            <p className="text-xs text-muted-foreground">{story.role}</p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-100">
                            {story.achievement}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground italic">"{story.quote}"</p>
                      </CardContent>
                    </Card>
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
                  立即加入公益课程
                </CardTitle>
                <CardDescription>
                  面向所有女性，全免费公益课程，全程实战陪跑
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">微信：shanger9561</span>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    添加微信时请备注"公益课程报名"
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-primary">报名流程</h4>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center p-2 rounded-lg bg-violet-50 text-violet-700">
                      1. 添加微信
                    </div>
                    <div className="text-center p-2 rounded-lg bg-violet-50 text-violet-700">
                      2. 审核入群
                    </div>
                    <div className="text-center p-2 rounded-lg bg-violet-50 text-violet-700">
                      3. 开始学习
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="rounded-xl bg-violet-600 hover:bg-violet-700">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    立即咨询报名
                  </Button>
                  
                  <Button variant="outline" className="rounded-xl border-primary text-primary hover:bg-primary/10">
                    复制微信号
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* WeChat Share */}
      <WeChatShare 
        title="公益自媒体赋能课程 - 李青忆公益赋能体系"
        description="全国首个女性专属公益自媒体赋能平台，全程实战陪跑，免费学习短视频、直播、全域流量运营。"
      />
    </div>
  )
}