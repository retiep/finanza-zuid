import Link from 'next/link';
import { FiCalendar, FiFileText, FiUsers, FiExternalLink, FiClock } from 'react-icons/fi';

export const metadata = {
  title: 'Member Dashboard | Finanza Zuid',
  description: 'Access your personalized dashboard for Finanza Zuid CFO Network.',
};

export default function MemberDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-secondary-600">Welcome back, Jan. Here's what's happening in your network.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link 
            href="/member/events/upcoming" 
            className="px-4 py-2 bg-primary-700 text-white font-medium rounded-md hover:bg-primary-800 transition-colors"
          >
            View Upcoming Events
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg">Upcoming Events</h3>
            <div className="bg-primary-50 p-2 rounded-full">
              <FiCalendar className="text-primary-700 w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-bold mb-1">3</p>
          <p className="text-secondary-600">Events in the next 30 days</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg">New Resources</h3>
            <div className="bg-primary-50 p-2 rounded-full">
              <FiFileText className="text-primary-700 w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-bold mb-1">7</p>
          <p className="text-secondary-600">New resources this month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg">Network Connections</h3>
            <div className="bg-primary-50 p-2 rounded-full">
              <FiUsers className="text-primary-700 w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-bold mb-1">124</p>
          <p className="text-secondary-600">Fellow CFOs in your network</p>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Your Upcoming Events</h2>
          <Link 
            href="/member/events" 
            className="text-primary-700 font-medium hover:text-primary-800 transition-colors flex items-center"
          >
            View All <FiExternalLink className="ml-1" />
          </Link>
        </div>
        <div className="space-y-4">
          <div className="border-l-4 border-primary-500 pl-4 py-2">
            <div className="flex items-center text-primary-600 mb-1">
              <FiCalendar className="mr-2" />
              <span>June 15, 2023</span>
              <span className="mx-2">•</span>
              <FiClock className="mr-2" />
              <span>9:00 AM - 5:00 PM</span>
            </div>
            <h3 className="font-bold text-lg mb-1">CFO Leadership Summit</h3>
            <p className="text-secondary-600 mb-2">Grand Hotel Amsterdam</p>
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full">Registered</span>
              <span className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-full">Conference</span>
            </div>
          </div>

          <div className="border-l-4 border-primary-500 pl-4 py-2">
            <div className="flex items-center text-primary-600 mb-1">
              <FiCalendar className="mr-2" />
              <span>July 8, 2023</span>
              <span className="mx-2">•</span>
              <FiClock className="mr-2" />
              <span>2:00 PM - 5:00 PM</span>
            </div>
            <h3 className="font-bold text-lg mb-1">Financial Technology Workshop</h3>
            <p className="text-secondary-600 mb-2">Tech Hub Rotterdam</p>
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full">Registered</span>
              <span className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-full">Workshop</span>
            </div>
          </div>

          <div className="border-l-4 border-secondary-300 pl-4 py-2">
            <div className="flex items-center text-primary-600 mb-1">
              <FiCalendar className="mr-2" />
              <span>August 22, 2023</span>
              <span className="mx-2">•</span>
              <FiClock className="mr-2" />
              <span>10:00 AM - 3:00 PM</span>
            </div>
            <h3 className="font-bold text-lg mb-1">ESG Reporting Masterclass</h3>
            <p className="text-secondary-600 mb-2">Sustainability Center Utrecht</p>
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-full">Not Registered</span>
              <span className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-full">Masterclass</span>
            </div>
            <Link 
              href="/member/events/esg-reporting-masterclass" 
              className="inline-block mt-2 text-primary-700 font-medium hover:text-primary-800 transition-colors"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Resources */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Recent Resources</h2>
          <Link 
            href="/member/resources" 
            className="text-primary-700 font-medium hover:text-primary-800 transition-colors flex items-center"
          >
            View All <FiExternalLink className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-secondary-200 rounded-lg overflow-hidden">
            <div className="h-32 bg-primary-700 flex items-center justify-center">
              <span className="text-white font-medium">Resource Image</span>
            </div>
            <div className="p-4">
              <div className="text-primary-600 text-sm mb-1">Guide • Digital Transformation</div>
              <h3 className="font-bold mb-2">The CFO's Guide to Digital Transformation</h3>
              <Link 
                href="/member/resources/cfo-digital-transformation-guide" 
                className="text-primary-700 font-medium hover:text-primary-800 transition-colors text-sm"
              >
                View Resource
              </Link>
            </div>
          </div>

          <div className="border border-secondary-200 rounded-lg overflow-hidden">
            <div className="h-32 bg-primary-700 flex items-center justify-center">
              <span className="text-white font-medium">Resource Image</span>
            </div>
            <div className="p-4">
              <div className="text-primary-600 text-sm mb-1">Framework • ESG & Sustainability</div>
              <h3 className="font-bold mb-2">ESG Reporting Framework for Financial Leaders</h3>
              <Link 
                href="/member/resources/esg-reporting-framework" 
                className="text-primary-700 font-medium hover:text-primary-800 transition-colors text-sm"
              >
                View Resource
              </Link>
            </div>
          </div>

          <div className="border border-secondary-200 rounded-lg overflow-hidden">
            <div className="h-32 bg-primary-700 flex items-center justify-center">
              <span className="text-white font-medium">Resource Image</span>
            </div>
            <div className="p-4">
              <div className="text-primary-600 text-sm mb-1">Whitepaper • Leadership</div>
              <h3 className="font-bold mb-2">Strategic Finance Leadership in Uncertain Times</h3>
              <Link 
                href="/member/resources/strategic-finance-leadership" 
                className="text-primary-700 font-medium hover:text-primary-800 transition-colors text-sm"
              >
                View Resource
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Network Activity */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Network Activity</h2>
          <Link 
            href="/member/network" 
            className="text-primary-700 font-medium hover:text-primary-800 transition-colors flex items-center"
          >
            View Network <FiExternalLink className="ml-1" />
          </Link>
        </div>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
              <span className="text-primary-700 font-bold">MV</span>
            </div>
            <div>
              <p className="font-medium">Maria van der Berg joined the network</p>
              <p className="text-secondary-600 text-sm">Finance Director, Global Retail • 2 days ago</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
              <span className="text-primary-700 font-bold">PK</span>
            </div>
            <div>
              <p className="font-medium">Peter Klaassen registered for CFO Leadership Summit</p>
              <p className="text-secondary-600 text-sm">CFO, Healthcare Solutions • 3 days ago</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
              <span className="text-primary-700 font-bold">SB</span>
            </div>
            <div>
              <p className="font-medium">Sophie Bakker shared a new resource: "AI in Finance Departments"</p>
              <p className="text-secondary-600 text-sm">Content & Education Lead • 5 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 