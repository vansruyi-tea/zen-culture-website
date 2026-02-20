import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Mail, MapPin, Users, Heart, Leaf, Mountain, Target, Globe, Award, Coffee, Mic, Home } from 'lucide-react'

export default function LiQingYiPage() {
  const coreTags = [
    { icon: <Award className="h-4 w-4" />, text: "省级陶瓷艺术大师 | 东方美学传承者" },
    { icon: <Coffee className="h-4 w-4" />, text: "禅茶文化践行者 | 净念茶修文化发起人" },
    { icon: <Leaf className="h-4 w-4" />, text: "云南忆舍茶业有限公司创始人 | 云古普洱品牌创始人" },
    { icon: <Users className="h-4 w-4" />, text: "云翼共创助农联盟发起人 | 公益自媒体赋能体系开创者" },
    { icon: <Home className="h-4 w-4" />, text: "乡村振兴践行者 | 女性创业成长引领者" }
  ]

  const sections = [
    {
      title: "根脉所系：守正传承，以匠心铸文化之基",
      icon: <Mountain className="h-6 w-6" />,
      content: `一方水土养一方人，云滇茶山的滋养，让李青忆与中华传统文化结下了一生的羁绊。
      
作为**云南忆舍茶业有限公司创始人、云古普洱品牌创始人**，她深耕普洱茶产业数十载，建立从古树茶基地、标准化生产到全渠道销售的全产业链布局，以"振兴中国茶行业，弘扬中国茶文化"为使命，让云南普洱茶走出大山、走向世界。她对"茶禅一味"有着深刻且独到的体悟："茶，是物质的灵芽；禅，是心悟的觉醒；一味，便是心与茶相融、心与心相通。"以此为核，她发起《正念茶修》系列传统文化课程，打造修身养心的文化传播体系，让传统茶修文化走进当代生活。

身为**省级陶瓷艺术大师**，她以匠心融茶韵，以瓷艺传东方美学，将茶的清雅、禅的通透融入陶瓷创作，实现传统工艺与当代审美的深度融合。同时，她联动云南各地古琴、刺绣、漆器、柴烧紫砂等非遗传承人，发起系列传统文化交流活动，搭建非遗文化传承与传播的平台，以一己之力汇聚众匠之光，守护中华文脉的薪火相传。

作为中医康养养生践行者，她深耕科学养生智慧，秉持"治未病"的中医理念，传播健康生活方式，将康养文化与东方生活美学相融，为当代人打造身心同修的生活范式。`
    },
    {
      title: "微光成炬：公益赋能，以柔力聚她力之潮",
      icon: <Heart className="h-6 w-6" />,
      content: `深知"独行快，众行远"，李青忆始终坚信，女性的柔韧之力，可聚沙成塔，可微光成炬。她以"唤醒女性力量，赋能女性成长"为初心，牵头搭建**全国首个女性专属公益自媒体赋能平台**，开创"教学-考核-导师-裂变"的全链路公益赋能体系。

平台面向所有女性，开设【真人口播短视频+直播全域运营】全免费公益课程，拒绝空谈理论，全程实战陪跑。从镜头感塑造、口播能力打磨，到"视频号+公众号+微信群"全域生态搭建，再到国家政策热点与个人IP打造的深度结合，手把手带领零基础女性解锁自媒体核心技能，让每一位女性都能抓住数字时代的发展红利。学员完成课程并通过考核后，可升级为认证导师，反哺赋能更多女性，形成"一人学成、百人受益、千人同行"的良性裂变生态，让公益赋能的火种生生不息。

以此为根基，李青忆联合妇联退休干部、知名女企业家、顶尖女艺术家、新锐女性创业者等核心力量，发起成立**云翼共创联盟**。联盟以"扎根云土，翼起翱翔"为核心理念，以"互助共创、抱团共赢"为根本宗旨，构建"内容+产业"的女性自媒体共创生态，打造三大核心赋能体系：全周期实战陪跑体系，为成员提供从0到1的账号孵化全流程解决方案；供应链与流量互补体系，实现"人、货、场"精准匹配，让有产品者共享流量矩阵，有内容能力者对接优质供应链；"她力量"互助社群体系，包容多元个性，让每一位女性都能找到互补队友，彼此托举、共同成长。`
    },
    {
      title: "山海践行：扎根乡土，以实干兴乡村之业",
      icon: <Target className="h-6 w-6" />,
      content: `始终心怀"国之大者"，李青忆将个人事业与国家乡村振兴战略深度绑定，以数字流量为笔，以乡土大地为卷，书写新时代女性助农兴农的实干篇章。

她带领云翼共创联盟，深度联动乡镇、村级政府，打造"自媒体+助农直播"的乡村振兴新模式，组织经过系统培训的女性创作者，深入田间地头开展助农直播，以数字流量赋能云南特色农产品上行，打通从产地到餐桌的直供链路，让大山里的好产品走出乡村，让茶农、农户实实在在增收致富，让流量不仅能变现，更能温暖乡土、赋能民生。

着眼于乡村产业的长效发展，她规划打造**乡村空心村康养基地共创项目**，融合艾灸养生、长期康养旅居、特色农产品交付、传统文化体验等多元业态，构建"康养+农业+文旅+共创"的乡村产业闭环。项目以开放包容的共创模式，面向所有认同理念的伙伴开放共创资格，以低门槛、高赋能、稳收益的机制，汇聚众力激活乡村闲置资源，打造乡村振兴的可持续样板。同时，项目为自媒体学员提供免费的线下实训与体验场景，实现"线上流量赋能、线下产业落地"的双向闭环，让女性成长与乡村振兴同频共振。`
    },
    {
      title: "初心致远：行而不辍，以初心赴时代之约",
      icon: <Globe className="h-6 w-6" />,
      content: `从茶山到山海，从个人成长到万众同行，李青忆始终坚守初心，以女性独有的"柔能克刚"之力，践行着文化传承者的使命、公益赋能者的担当、乡村振兴者的情怀。

她始终坚信，时代的浪潮中，最动人的力量，永远来自于并肩同行的人；最坚实的成长，永远扎根于家国乡土的厚土。未来，她将继续带领云翼共创联盟的万千姐妹，以镜头记录真实乡土，以行动传递助农价值，以文化守护民族根脉，在乡村振兴的时代赛道上，在中华优秀传统文化复兴的征程中，绽放属于中国女性的璀璨光芒，书写属于新时代女性的家国华章。`
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Avatar className="h-48 w-48 border-4 border-background shadow-2xl">
                <AvatarImage src="/liqingyi-avatar.jpg" alt="李青忆" />
                <AvatarFallback className="text-4xl">李</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                  李青忆
                </h1>
                <p className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
                  茶心映山海 · 她力振乡邦
                </p>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  扎根云滇厚土的新时代女性引领者，中华禅茶文化传承者，
                  乡村振兴战略践行者，公益自媒体赋能体系开创者。
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    云南峨山 · 哀牢山腹地
                  </Badge>
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    <Heart className="h-4 w-4 mr-2" />
                    禅宗临济宗如淦法师皈依弟子
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Tags */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreTags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                >
                  <div className="text-primary">{tag.icon}</div>
                  <span className="text-sm font-medium">{tag.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <Card key={index} className="border-primary/20 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                  <div className="flex items-center gap-3">
                    <div className="text-primary">{section.icon}</div>
                    <CardTitle className="text-2xl font-serif text-primary">
                      {section.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="prose prose-lg max-w-none">
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-4 text-foreground/80 leading-relaxed">
                        {paragraph.split('**').map((text, i) => 
                          i % 2 === 1 ? (
                            <strong key={i} className="text-primary font-semibold">{text}</strong>
                          ) : (
                            text
                          )
                        )}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-primary/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">
                  加入我们
                </CardTitle>
                <CardDescription className="text-lg">
                  核心理念：互助共创 抱团共赢 扎根乡土 翼起翱翔
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-lg font-medium">微信：shanger9561</span>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-background border">
                      <h4 className="font-semibold text-primary mb-2">文化传承</h4>
                      <p className="text-sm text-muted-foreground">
                        禅茶文化 · 陶瓷艺术 · 中医养生 · 非遗传承
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-background border">
                      <h4 className="font-semibold text-primary mb-2">公益赋能</h4>
                      <p className="text-sm text-muted-foreground">
                        女性成长 · 自媒体培训 · 实战陪跑 · 导师体系
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6">
                  <Mic className="mr-2 h-5 w-5" />
                  立即加入云翼共创联盟
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-2xl font-serif italic text-primary/80">
              "从茶山到山海，从个人成长到万众同行，以女性独有的柔韧与坚定，
              走出了一条'文化铸魂、公益立行、产业兴邦'的时代奋进之路。"
            </blockquote>
            <p className="mt-4 text-muted-foreground">—— 李青忆</p>
          </div>
        </div>
      </section>
    </div>
  )
}