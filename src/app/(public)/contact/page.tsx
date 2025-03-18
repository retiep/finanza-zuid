import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiMessageSquare, FiUser, FiFileText } from 'react-icons/fi';

export const metadata = {
  title: 'Contact Us | Finanza Zuid CFO Network',
  description: 'Get in touch with the Finanza Zuid team for membership inquiries, event information, or general questions.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-0 text-primary-100">
              Have questions about Finanza Zuid? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-secondary-700 mb-8">
                Whether you're interested in membership, have questions about our events, or want to learn more about Finanza Zuid, we'd love to hear from you.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="text-secondary-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        className="pl-10 pr-4 py-2 w-full border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMail className="text-secondary-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        className="pl-10 pr-4 py-2 w-full border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-1">
                    Subject
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiFileText className="text-secondary-400" />
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="How can we help?"
                      className="pl-10 pr-4 py-2 w-full border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                    Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <FiMessageSquare className="text-secondary-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Your message"
                      className="pl-10 pr-4 py-2 w-full border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    ></textarea>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary-700 text-white font-medium rounded-md hover:bg-primary-800 transition-colors w-full md:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div>
              <div className="bg-secondary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="mr-4 mt-1">
                      <div className="bg-primary-100 p-2 rounded-full">
                        <FiMail className="text-primary-700 w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Email</h4>
                      <a href="mailto:info@finanzazuid.nl" className="text-primary-700 hover:text-primary-800 transition-colors">
                        info@finanzazuid.nl
                      </a>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-4 mt-1">
                      <div className="bg-primary-100 p-2 rounded-full">
                        <FiPhone className="text-primary-700 w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Phone</h4>
                      <a href="tel:+31201234567" className="text-primary-700 hover:text-primary-800 transition-colors">
                        +31 20 123 4567
                      </a>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-4 mt-1">
                      <div className="bg-primary-100 p-2 rounded-full">
                        <FiMapPin className="text-primary-700 w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Office Address</h4>
                      <address className="not-italic text-secondary-700">
                        <p className="mb-1">Finanza Zuid</p>
                        <p className="mb-1">123 Finance Street</p>
                        <p className="mb-1">Amsterdam, Netherlands</p>
                        <p>1234 AB</p>
                      </address>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-secondary-200">
                  <h4 className="text-lg font-bold mb-4">Office Hours</h4>
                  <ul className="space-y-2 text-secondary-700">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday - Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-secondary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Membership Inquiries</h3>
                <p className="text-secondary-700 mb-4">
                  Interested in joining Finanza Zuid? Our membership team is ready to answer your questions and guide you through the application process.
                </p>
                <Link 
                  href="/register" 
                  className="inline-block px-6 py-3 bg-primary-700 text-white font-medium rounded-md hover:bg-primary-800 transition-colors"
                >
                  Apply for Membership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="relative h-96 bg-secondary-200 rounded-lg flex items-center justify-center">
            <span className="text-secondary-500 text-lg">Map Placeholder</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">How do I become a member of Finanza Zuid?</h3>
              <p className="text-secondary-700">
                Membership to Finanza Zuid is open to Chief Financial Officers and senior financial leaders. You can apply for membership through our online application form, after which our membership committee will review your application.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">What are the benefits of membership?</h3>
              <p className="text-secondary-700">
                Members enjoy exclusive access to our events, resources, networking opportunities, and member-only content. You'll connect with fellow CFOs, gain insights from industry experts, and enhance your professional development.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">How much does membership cost?</h3>
              <p className="text-secondary-700">
                We offer different membership tiers to suit various needs and organization sizes. Please contact our membership team for detailed information about our current membership fees and what each tier includes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Can I attend an event before becoming a member?</h3>
              <p className="text-secondary-700">
                Yes, we occasionally host open events that non-members can attend. These events are a great way to experience the value of Finanza Zuid before committing to membership. Check our events page for upcoming open events.
              </p>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-secondary-700 mb-4">
                Don't see your question here?
              </p>
              <Link 
                href="#contact-form" 
                className="text-primary-700 font-medium hover:text-primary-800 transition-colors"
              >
                Contact us directly
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 