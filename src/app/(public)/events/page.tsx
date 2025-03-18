import Link from 'next/link';
import { FiCalendar, FiMapPin, FiClock, FiFilter, FiSearch } from 'react-icons/fi';

export const metadata = {
  title: 'Events | Finanza Zuid CFO Network',
  description: 'Discover upcoming events, workshops, and networking opportunities for CFOs and financial leaders at Finanza Zuid.',
};

export default function EventsPage() {
  // In a real application, this data would come from a CMS or API
  const events = [
    {
      id: 'cfo-leadership-summit',
      title: 'CFO Leadership Summit',
      date: 'June 15, 2023',
      time: '9:00 AM - 5:00 PM',
      location: 'Grand Hotel Amsterdam',
      category: 'Conference',
      description: 'A full-day event featuring keynote speakers, panel discussions, and networking opportunities focused on strategic financial leadership.',
      featured: true,
    },
    {
      id: 'financial-technology-workshop',
      title: 'Financial Technology Workshop',
      date: 'July 8, 2023',
      time: '2:00 PM - 5:00 PM',
      location: 'Tech Hub Rotterdam',
      category: 'Workshop',
      description: 'Explore the latest fintech innovations and their impact on financial leadership in this hands-on workshop.',
      featured: true,
    },
    {
      id: 'esg-reporting-masterclass',
      title: 'ESG Reporting Masterclass',
      date: 'August 22, 2023',
      time: '10:00 AM - 3:00 PM',
      location: 'Sustainability Center Utrecht',
      category: 'Masterclass',
      description: 'Learn best practices for environmental, social, and governance reporting from industry experts.',
      featured: true,
    },
    {
      id: 'quarterly-cfo-roundtable',
      title: 'Quarterly CFO Roundtable',
      date: 'September 5, 2023',
      time: '4:00 PM - 6:30 PM',
      location: 'Finance Club Eindhoven',
      category: 'Networking',
      description: 'Join fellow CFOs for an intimate discussion on current challenges and opportunities in financial leadership.',
      featured: false,
    },
    {
      id: 'digital-transformation-seminar',
      title: 'Digital Transformation Seminar',
      date: 'October 12, 2023',
      time: '1:00 PM - 4:30 PM',
      location: 'Digital Innovation Center Maastricht',
      category: 'Seminar',
      description: 'Discover how digital transformation is reshaping finance departments and what CFOs need to know.',
      featured: false,
    },
    {
      id: 'annual-finance-gala',
      title: 'Annual Finance Leadership Gala',
      date: 'November 18, 2023',
      time: '7:00 PM - 11:00 PM',
      location: 'Royal Palace Hotel Den Haag',
      category: 'Gala',
      description: 'Celebrate excellence in financial leadership at our prestigious annual gala dinner and awards ceremony.',
      featured: false,
    },
  ];

  const featuredEvents = events.filter(event => event.featured);
  const upcomingEvents = events.filter(event => !event.featured);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Networking</h1>
            <p className="text-xl mb-0 text-primary-100">
              Connect with fellow CFOs at our exclusive events, workshops, and networking opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-secondary-400" />
              </div>
              <input
                type="text"
                placeholder="Search events..."
                className="pl-10 pr-4 py-2 w-full border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <select className="appearance-none pl-10 pr-8 py-2 border border-secondary-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option value="">All Categories</option>
                  <option value="conference">Conference</option>
                  <option value="workshop">Workshop</option>
                  <option value="networking">Networking</option>
                  <option value="seminar">Seminar</option>
                  <option value="gala">Gala</option>
                </select>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiFilter className="text-secondary-400" />
                </div>
              </div>
              <div className="relative">
                <select className="appearance-none pl-10 pr-8 py-2 border border-secondary-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option value="">All Locations</option>
                  <option value="amsterdam">Amsterdam</option>
                  <option value="rotterdam">Rotterdam</option>
                  <option value="utrecht">Utrecht</option>
                  <option value="eindhoven">Eindhoven</option>
                  <option value="maastricht">Maastricht</option>
                </select>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMapPin className="text-secondary-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-secondary-100">
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-primary-700 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">Event Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-primary-600 mb-2">
                    <FiCalendar className="mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="flex items-center text-secondary-600 mb-2">
                    <FiMapPin className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-secondary-600 mb-4">
                    <FiClock className="mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <p className="text-secondary-700 mb-4">
                    {event.description}
                  </p>
                  <Link 
                    href={`/events/${event.id}`} 
                    className="inline-block px-4 py-2 bg-primary-700 text-white font-medium rounded-md hover:bg-primary-800 transition-colors"
                  >
                    Event Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-secondary-100 flex flex-col md:flex-row">
                <div className="relative h-48 md:h-auto md:w-1/3">
                  <div className="absolute inset-0 bg-primary-700 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">Event Image</span>
                  </div>
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center text-primary-600 mb-2">
                    <FiCalendar className="mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="flex items-center text-secondary-600 mb-2">
                    <FiMapPin className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-secondary-600 mb-4">
                    <FiClock className="mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <p className="text-secondary-700 mb-4">
                    {event.description}
                  </p>
                  <Link 
                    href={`/events/${event.id}`} 
                    className="inline-block px-4 py-2 bg-primary-700 text-white font-medium rounded-md hover:bg-primary-800 transition-colors"
                  >
                    Event Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Past Events</h2>
            <Link 
              href="/events/archive" 
              className="mt-4 md:mt-0 text-primary-700 font-medium hover:text-primary-800 transition-colors"
            >
              View All Past Events
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-secondary-100">
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-secondary-200 flex items-center justify-center">
                  <span className="text-secondary-500 text-lg font-medium">Event Image</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-secondary-600 mb-2">
                  <FiCalendar className="mr-2" />
                  <span>April 10, 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Financial Risk Management Forum</h3>
                <div className="flex items-center text-secondary-600 mb-4">
                  <FiMapPin className="mr-2" />
                  <span>Finance Center Amsterdam</span>
                </div>
                <Link 
                  href="/events/financial-risk-management-forum" 
                  className="text-primary-700 font-medium hover:text-primary-800 transition-colors"
                >
                  View Recap & Resources
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-secondary-100">
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-secondary-200 flex items-center justify-center">
                  <span className="text-secondary-500 text-lg font-medium">Event Image</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-secondary-600 mb-2">
                  <FiCalendar className="mr-2" />
                  <span>March 15, 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-2">CFO Breakfast: Economic Outlook</h3>
                <div className="flex items-center text-secondary-600 mb-4">
                  <FiMapPin className="mr-2" />
                  <span>Business Club Rotterdam</span>
                </div>
                <Link 
                  href="/events/cfo-breakfast-economic-outlook" 
                  className="text-primary-700 font-medium hover:text-primary-800 transition-colors"
                >
                  View Recap & Resources
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-secondary-100">
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-secondary-200 flex items-center justify-center">
                  <span className="text-secondary-500 text-lg font-medium">Event Image</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-secondary-600 mb-2">
                  <FiCalendar className="mr-2" />
                  <span>February 22, 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Strategic M&A Workshop</h3>
                <div className="flex items-center text-secondary-600 mb-4">
                  <FiMapPin className="mr-2" />
                  <span>Corporate Center Utrecht</span>
                </div>
                <Link 
                  href="/events/strategic-ma-workshop" 
                  className="text-primary-700 font-medium hover:text-primary-800 transition-colors"
                >
                  View Recap & Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Events CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Exclusive Member-Only Events</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-100">
            Join Finanza Zuid to access our exclusive member-only events, including intimate roundtables, executive retreats, and VIP networking opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="px-8 py-4 bg-white text-primary-700 font-medium rounded-md hover:bg-primary-50 transition-colors text-center"
            >
              Become a Member
            </Link>
            <Link 
              href="/login" 
              className="px-8 py-4 border border-white text-white font-medium rounded-md hover:bg-primary-600 transition-colors text-center"
            >
              Member Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 