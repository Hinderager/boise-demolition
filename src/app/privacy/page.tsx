import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Demolition Pros',
  description: 'Privacy policy for Demolition Pros - how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://boise-demolition.com/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gunmetal mb-4">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: December 13, 2024</p>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Demolition Pros (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Information We Collect</h2>

            <h3 className="text-xl font-bold text-gunmetal mt-6 mb-3">Information You Provide</h3>
            <p>When you fill out our contact form, call us, or request our services, we may collect:</p>
            <ul>
              <li>Name and contact information (phone number, email address)</li>
              <li>Service address and location information</li>
              <li>Details about your demolition needs</li>
              <li>Preferred appointment dates and times</li>
              <li>Payment information (when applicable)</li>
            </ul>

            <h3 className="text-xl font-bold text-gunmetal mt-6 mb-3">Information Collected Automatically</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Device information</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide quotes</li>
              <li>Schedule and perform demolition services</li>
              <li>Communicate with you about your service appointment</li>
              <li>Send appointment reminders and follow-up communications</li>
              <li>Process payments for services rendered</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Information Sharing</h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties for marketing purposes. We may share your information with:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> Third-party companies that help us operate our business, such as our scheduling and CRM system</li>
              <li><strong>Legal Requirements:</strong> When required by law, subpoena, or other legal process</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can set your browser to refuse cookies, but some features of our website may not function properly.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information below.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2 className="text-2xl font-bold text-gunmetal mt-8 mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <ul>
              <li><strong>Phone:</strong> (208) 361-1982</li>
              <li><strong>Email:</strong> info@topshelfpros.com</li>
            </ul>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link href="/" className="text-dark-blue underline hover:text-light-blue">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
