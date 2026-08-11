/**
 * FAQPage schema for the questions actually on the page.
 *
 * Google requires FAQPage markup to describe FAQ content the visitor can see.
 * This site used to emit one fixed list from the root layout, which meant every
 * page carried it — including pages with no FAQ at all — and the questions in
 * the markup were worded differently from the ones in the accordion. It is now
 * built from the same array that renders the questions, and nowhere else.
 */
export function FaqSchema({
  faqs,
}: {
  faqs?: { question: string; answer: string }[]
}) {
  if (!faqs?.length) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
