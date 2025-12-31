import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Demolition Pros Blog | Tips & Guides for Demolition',
  description: 'Expert tips, guides, and insights about demolition in Boise and the Treasure Valley. Learn from the pros at Demolition Pros.',
  alternates: {
    canonical: 'https://boise-demolition.com/blogs',
  },
}

const blogPosts = [
  {
    "slug": "demolition-permits-boise-idaho",
    "title": "Do You Need a Demolition Permit in Boise? (Quick Answer)",
    "excerpt": "The permit question trips up a lot of property owners. Here's what Boise requires for demolition projects.",
    "image": "/generated/demolition-permits-boise.webp"
  },
  {
    "slug": "full-vs-partial-demolition",
    "title": "Full Demolition vs Partial Demolition: Which Do You Need?",
    "excerpt": "Sometimes you need to tear everything down. Sometimes just part. Here's how to decide.",
    "image": "/generated/full-partial-demolition.webp"
  },
  {
    "slug": "what-happens-during-demolition",
    "title": "What Actually Happens During a Demolition Project?",
    "excerpt": "Curious about the demolition process? Here's a step-by-step look at what goes into tearing down a structure.",
    "image": "/generated/demolition-process-boise.webp"
  },
  {
    "slug": "preparing-property-for-demolition",
    "title": "How to Prepare Your Property for Demolition",
    "excerpt": "A little prep work goes a long way. Here's what to handle before the demo crew arrives.",
    "image": "/generated/preparing-demolition-boise.webp"
  },
  {
    "slug": "demolition-safety-what-homeowners-should-know",
    "title": "Demolition Safety: What Homeowners Should Know",
    "excerpt": "Demolition involves real risks. Here's what to expect and how professionals keep everyone safe.",
    "image": "/generated/demolition-safety-boise.webp"
  }
]

export default function BlogsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <Image
          src="/generated/hero.webp"
          alt="Demolition Pros Blog"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/80 to-dark-blue/60" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Tips, guides, and insights about demolition in the Treasure Valley. Real advice from real professionals.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blogs/${post.slug}`}>
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gunmetal mb-2 hover:text-dark-blue transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-dark-blue font-semibold">
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your demolition project.
          </p>
          <a
            href="tel:2083611982"
            className="inline-block bg-brand-yellow hover:bg-yellow-400 text-black font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Call (208) 361-1982
          </a>
        </div>
      </section>
    </main>
  )
}
