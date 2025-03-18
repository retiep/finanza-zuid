import Link from 'next/link';
import Image from 'next/image';
import { FiTarget, FiUsers, FiAward } from 'react-icons/fi';

export const metadata = {
  title: 'About Finanza Zuid | CFO Network Organization',
  description: 'Learn about Finanza Zuid, our mission, values, and the team behind our CFO network organization.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Finanza Zuid</h1>
            <p className="text-xl mb-0 text-primary-100">
              A premier network organization dedicated to connecting and empowering Chief Financial Officers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <FiTarget className="text-primary-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                    <p className="text-secondary-700">
                      To create a thriving community of financial leaders who collaborate, innovate, and elevate the finance profession through knowledge sharing and professional development.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <FiUsers className="text-primary-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                    <p className="text-secondary-700">
                      To be the most influential and supportive network for CFOs in the southern region, driving excellence in financial leadership and strategic business growth.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <FiAward className="text-primary-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Values</h3>
                    <p className="text-secondary-700">
                      Excellence, Integrity, Collaboration, Innovation, and Inclusivity guide everything we do at Finanza Zuid.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 bg-secondary-100 rounded-lg flex items-center justify-center">
              <span className="text-secondary-500 text-lg">Mission Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-secondary-700">
              <p>
                Finanza Zuid was founded in 2015 by a group of forward-thinking CFOs who recognized the need for a dedicated professional network for financial leaders in the southern region. What began as informal gatherings has evolved into the premier organization for CFOs seeking connection, growth, and excellence.
              </p>
              <p>
                Over the years, we've grown to include hundreds of members from diverse industries, all sharing a commitment to advancing the finance profession and supporting each other's success. Our events, resources, and community initiatives have helped countless financial leaders navigate challenges, seize opportunities, and drive their organizations forward.
              </p>
              <p>
                Today, Finanza Zuid stands as a beacon of excellence in the financial community, known for our high-quality programming, exclusive networking opportunities, and commitment to professional development. As we look to the future, we remain dedicated to our founding vision: creating a space where CFOs can connect, learn, and thrive together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 bg-secondary-100 rounded-full flex items-center justify-center">
                <span className="text-secondary-500">Photo</span>
              </div>
              <h3 className="text-xl font-bold">Hendrik van der Meer</h3>
              <p className="text-primary-600 mb-2">Founder & President</p>
              <p className="text-secondary-600 max-w-sm mx-auto">
                Former CFO with 25+ years of experience in multinational corporations.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 bg-secondary-100 rounded-full flex items-center justify-center">
                <span className="text-secondary-500">Photo</span>
              </div>
              <h3 className="text-xl font-bold">Annemarie Jansen</h3>
              <p className="text-primary-600 mb-2">Executive Director</p>
              <p className="text-secondary-600 max-w-sm mx-auto">
                Strategic leader with expertise in professional associations and member engagement.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 bg-secondary-100 rounded-full flex items-center justify-center">
                <span className="text-secondary-500">Photo</span>
              </div>
              <h3 className="text-xl font-bold">Thomas de Vries</h3>
              <p className="text-primary-600 mb-2">Events Director</p>
              <p className="text-secondary-600 max-w-sm mx-auto">
                Experienced event planner specializing in executive-level programming and networking.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 bg-secondary-100 rounded-full flex items-center justify-center">
                <span className="text-secondary-500">Photo</span>
              </div>
              <h3 className="text-xl font-bold">Sophie Bakker</h3>
              <p className="text-primary-600 mb-2">Content & Education Lead</p>
              <p className="text-secondary-600 max-w-sm mx-auto">
                Former finance professor with a passion for continuing education and professional development.
              </p>
            </div>

            {/* Team Member 5 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 bg-secondary-100 rounded-full flex items-center justify-center">
                <span className="text-secondary-500">Photo</span>
              </div>
              <h3 className="text-xl font-bold">Lars Vermeulen</h3>
              <p className="text-primary-600 mb-2">Technology & Innovation Officer</p>
              <p className="text-secondary-600 max-w-sm mx-auto">
                Tech-savvy finance professional focused on digital transformation and fintech solutions.
              </p>
            </div>

            {/* Team Member 6 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 bg-secondary-100 rounded-full flex items-center justify-center">
                <span className="text-secondary-500">Photo</span>
              </div>
              <h3 className="text-xl font-bold">Emma Visser</h3>
              <p className="text-primary-600 mb-2">Member Relations Manager</p>
              <p className="text-secondary-600 max-w-sm mx-auto">
                Dedicated to creating exceptional experiences for our members and fostering community connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing Network</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-100">
            Connect with fellow CFOs, access exclusive resources, and advance your career with Finanza Zuid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="px-8 py-4 bg-white text-primary-700 font-medium rounded-md hover:bg-primary-50 transition-colors text-center"
            >
              Become a Member
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 border border-white text-white font-medium rounded-md hover:bg-primary-600 transition-colors text-center"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 