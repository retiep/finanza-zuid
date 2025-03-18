import Link from 'next/link';
import { FiHome, FiCalendar, FiFileText, FiUsers, FiSettings, FiLogOut } from 'react-icons/fi';

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-secondary-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6 border-b">
          <Link href="/member/dashboard" className="flex items-center">
            <span className="text-xl font-serif font-bold text-primary-700">Finanza Zuid</span>
          </Link>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link 
                href="/member/dashboard" 
                className="flex items-center p-2 rounded-md text-secondary-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
              >
                <FiHome className="mr-3" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                href="/member/events" 
                className="flex items-center p-2 rounded-md text-secondary-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
              >
                <FiCalendar className="mr-3" />
                Events
              </Link>
            </li>
            <li>
              <Link 
                href="/member/resources" 
                className="flex items-center p-2 rounded-md text-secondary-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
              >
                <FiFileText className="mr-3" />
                Resources
              </Link>
            </li>
            <li>
              <Link 
                href="/member/network" 
                className="flex items-center p-2 rounded-md text-secondary-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
              >
                <FiUsers className="mr-3" />
                Network
              </Link>
            </li>
            <li className="pt-6 mt-6 border-t">
              <Link 
                href="/member/settings" 
                className="flex items-center p-2 rounded-md text-secondary-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
              >
                <FiSettings className="mr-3" />
                Settings
              </Link>
            </li>
            <li>
              <Link 
                href="/logout" 
                className="flex items-center p-2 rounded-md text-secondary-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
              >
                <FiLogOut className="mr-3" />
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="md:hidden">
              <Link href="/member/dashboard" className="flex items-center">
                <span className="text-xl font-serif font-bold text-primary-700">Finanza Zuid</span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="mr-4 text-right hidden md:block">
                <div className="text-sm text-secondary-500">Welcome back,</div>
                <div className="font-medium">Jan Dekker</div>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-primary-700 font-bold">JD</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 