import Image from 'next/image'

const features = [
  {
    emoji: '🎨',
    title: '传统工艺',
    description: '学习千年传承的陶瓷制作技艺，感受东方美学的精髓',
  },
  {
    emoji: '🖌️',
    title: '艺术创作',
    description: '在专业指导下，创作属于自己的独特陶瓷艺术品',
  },
  {
    emoji: '🔥',
    title: '窑烧体验',
    description: '亲身体验窑烧过程，见证泥土在火焰中蜕变',
  },
  {
    emoji: '🌍',
    title: '文化交流',
    description: '与来自世界各地的陶瓷爱好者交流学习',
  },
]

const ceramicTypes = [
  {
    name: '青花瓷',
    description: '传统青花瓷工艺，展现东方水墨意境',
    color: 'bg-blue-50',
  },
  {
    name: '紫砂壶',
    description: '宜兴紫砂工艺，茶道文化的精髓',
    color: 'bg-amber-50',
  },
  {
    name: '白瓷',
    description: '纯净白瓷，展现简约美学',
    color: 'bg-gray-50',
  },
  {
    name: '彩绘瓷',
    description: '多彩彩绘，融合传统与现代艺术',
    color: 'bg-rose-50',
  },
]

export default function CeramicArtPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 py-20">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-serif font-bold text-amber-900 sm:text-5xl md:text-6xl">
              陶瓷艺术
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-amber-800 md:text-xl">
              泥土与火焰的对话，传统与创新的融合
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-serif font-bold text-primary">
                陶瓷艺术的魅力
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  陶瓷艺术是中国传统文化的重要组成部分，承载着千年的历史与智慧。
                  每一件陶瓷作品都是艺术家与自然的对话，是泥土、水、火与时间的完美结合。
                </p>
                <p>
                  在我们的陶瓷艺术工作室，您将有机会亲身体验从泥土到艺术品的完整创作过程。
                  无论您是初学者还是资深爱好者，都能在这里找到属于自己的创作灵感。
                </p>
                <p>
                  我们提供专业的指导、优质的设备和舒适的环境，让您在创作中感受传统文化的魅力，
                  在艺术中寻找内心的平静。
                </p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-6xl">🏺</span>
                  <h3 className="mt-4 text-2xl font-serif font-bold text-amber-900">
                    千年传承
                  </h3>
                  <p className="text-amber-800">现代演绎</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              课程特色
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              专业指导，全方位学习陶瓷艺术
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl border bg-card p-6 text-center shadow-sm"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-amber-100 p-3">
                    <span className="h-6 w-6 text-amber-600 text-xl">
                      {feature.emoji}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Ceramic Types */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              陶瓷种类
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              探索不同风格的陶瓷艺术
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ceramicTypes.map((type, index) => (
              <div
                key={index}
                className={`rounded-xl border p-6 ${type.color} text-center`}
              >
                <div className="mb-4 h-12 w-12 mx-auto rounded-full bg-white flex items-center justify-center">
                  <span className="text-xl">🏺</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-primary">
                  {type.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-3xl font-serif font-bold text-amber-900">
            开始您的陶瓷艺术之旅
          </h2>
          <p className="mb-8 text-lg text-amber-800 max-w-2xl mx-auto">
            无论您是想要学习传统工艺，还是创作现代艺术品，我们都能为您提供专业的指导和支持。
          </p>
          <button className="rounded-lg bg-amber-600 px-8 py-3 text-sm font-medium text-white shadow-lg hover:bg-amber-700 transition-colors">
            预约体验课
          </button>
        </div>
      </section>
    </div>
  )
}