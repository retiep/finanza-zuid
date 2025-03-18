import Link from 'next/link';
import Image from 'next/image';
import { FiUsers, FiCalendar, FiBookOpen, FiShield } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Connecting Financial Leaders
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Finanza Zuid is the premier network for Chief Financial Officers in the southern region, providing exclusive resources, events, and networking opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/register" 
                className="px-6 py-3 bg-white text-primary-700 font-medium rounded-md hover:bg-primary-50 transition-colors text-center"
              >
                Join Our Network
              </Link>
              <Link 
                href="/about" 
                className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-primary-600 transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Finanza Zuid?</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Our network provides CFOs with the tools, connections, and insights needed to excel in today's complex financial landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100 flex flex-col items-center text-center">
              <div className="bg-primary-50 p-4 rounded-full mb-4">
                <FiUsers className="text-primary-700 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Exclusive Network</h3>
              <p className="text-secondary-600">
                Connect with fellow CFOs and financial leaders in a trusted, private environment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100 flex flex-col items-center text-center">
              <div className="bg-primary-50 p-4 rounded-full mb-4">
                <FiCalendar className="text-primary-700 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Events</h3>
              <p className="text-secondary-600">
                Attend high-quality events, workshops, and seminars tailored for financial executives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100 flex flex-col items-center text-center">
              <div className="bg-primary-50 p-4 rounded-full mb-4">
                <FiBookOpen className="text-primary-700 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Resources</h3>
              <p className="text-secondary-600">
                Access exclusive content, research, and tools to enhance your financial leadership.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100 flex flex-col items-center text-center">
              <div className="bg-primary-50 p-4 rounded-full mb-4">
                <FiShield className="text-primary-700 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Growth</h3>
              <p className="text-secondary-600">
                Develop your career with mentorship opportunities and leadership development programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-24 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Upcoming Events</h2>
              <p className="text-lg text-secondary-600">
                Join us at our next exclusive gathering for financial leaders.
              </p>
            </div>
            <Link 
              href="/events" 
              className="mt-4 md:mt-0 px-6 py-3 bg-primary-700 text-white font-medium rounded-md hover:bg-primary-800 transition-colors"
            >
              View All Events
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-primary-700 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">Event Image</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-primary-600 mb-2">
                  <FiCalendar className="mr-2" />
                  <span>June 15, 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-2">CFO Leadership Summit</h3>
                <p className="text-secondary-600 mb-4">
                  A full-day event featuring keynote speakers, panel discussions, and networking opportunities.
                </p>
                <Link 
                  href="/events/cfo-leadership-summit" 
                  className="text-primary-700 font-medium hover:text-primary-800 transition-colors"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-primary-700 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">Event Image</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-primary-600 mb-2">
                  <FiCalendar className="mr-2" />
                  <span>July 8, 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Financial Technology Workshop</h3>
                <p className="text-secondary-600 mb-4">
                  Explore the latest fintech innovations and their impact on financial leadership.
                </p>
                <Link 
                  href="/events/financial-technology-workshop" 
                  className="text-primary-700 font-medium hover:text-primary-800 transition-colors"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-primary-700 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">Event Image</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-primary-600 mb-2">
                  <FiCalendar className="mr-2" />
                  <span>August 22, 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-2">ESG Reporting Masterclass</h3>
                <p className="text-secondary-600 mb-4">
                  Learn best practices for environmental, social, and governance reporting.
                </p>
                <Link 
                  href="/events/esg-reporting-masterclass" 
                  className="text-primary-700 font-medium hover:text-primary-800 transition-colors"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Members Say</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Hear from financial leaders who have benefited from our network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-secondary-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-700 font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-bold">Jan Dekker</h4>
                  <p className="text-secondary-600 text-sm">CFO, Tech Innovations BV</p>
                </div>
              </div>
              <p className="text-secondary-700 italic">
                "Joining Finanza Zuid has been transformative for my career. The connections I've made and insights I've gained are invaluable."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-secondary-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-700 font-bold">MV</span>
                </div>
                <div>
                  <h4 className="font-bold">Maria van der Berg</h4>
                  <p className="text-secondary-600 text-sm">Finance Director, Global Retail</p>
                </div>
              </div>
              <p className="text-secondary-700 italic">
                "The quality of events and resources provided by Finanza Zuid is exceptional. It's the premier network for financial leaders in our region."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-secondary-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-700 font-bold">PK</span>
                </div>
                <div>
                  <h4 className="font-bold">Peter Klaassen</h4>
                  <p className="text-secondary-600 text-sm">CFO, Healthcare Solutions</p>
                </div>
              </div>
              <p className="text-secondary-700 italic">
                "As a CFO in a rapidly changing industry, the peer support and knowledge sharing within Finanza Zuid has been crucial to my success."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Network?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-100">
            Become a member today and gain access to exclusive events, resources, and a community of financial leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="px-8 py-4 bg-white text-primary-700 font-medium rounded-md hover:bg-primary-50 transition-colors text-center"
            >
              Join Now
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 border border-white text-white font-medium rounded-md hover:bg-primary-600 transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 