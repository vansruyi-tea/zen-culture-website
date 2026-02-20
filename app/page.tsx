import HeroSection from '@/components/HeroSection'
import FeatureCards from '@/components/FeatureCards'
import GalleryPreview from '@/components/GalleryPreview'
import UpcomingEvents from '@/components/UpcomingEvents'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />
      
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