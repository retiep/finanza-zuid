import Link from 'next/link';
import { FiFileText, FiVideo, FiDownload, FiSearch, FiFilter } from 'react-icons/fi';

export const metadata = {
  title: 'Resources | Finanza Zuid CFO Network',
  description: 'Access valuable resources, articles, guides, and insights for CFOs and financial leaders at Finanza Zuid.',
};

export default function ResourcesPage() {
  // In a real application, this data would come from a CMS or API
  const featuredResources = [
    {
      id: 'cfo-digital-transformation-guide',
      title: 'The CFO\'s Guide to Digital Transformation',
      type: 'Guide',
      category: 'Digital Transformation',
      description: 'A comprehensive guide to navigating digital transformation initiatives from the CFO perspective.',
      image: '/images/resources/digital-transformation.jpg',
    },
    {
      id: 'esg-reporting-framework',
      title: 'ESG Reporting Framework for Financial Leaders',
      type: 'Framework',
      category: 'ESG & Sustainability',
      description: 'A structured approach to implementing effective environmental, social, and governance reporting.',
      image: '/images/resources/esg-reporting.jpg',
    },
    {
      id: 'strategic-finance-leadership',
      title: 'Strategic Finance Leadership in Uncertain Times',
      type: 'Whitepaper',
      category: 'Leadership',
      description: 'Insights on how CFOs can lead strategically during periods of economic uncertainty and market volatility.',
      image: '/images/resources/strategic-leadership.jpg',
    },
  ];

  const articles = [
    {
      id: 'ai-finance-department',
      title: 'How AI is Transforming the Finance Department',
      date: 'May 15, 2023',
      category: 'Technology',
      excerpt: 'Explore the practical applications of artificial intelligence in finance operations and strategic decision-making.',
    },
    {
      id: 'cfo-board-communication',
      title: 'Effective Board Communication Strategies for CFOs',
      date: 'April 28, 2023',
      category: 'Leadership',
      excerpt: 'Learn how to communicate complex financial information to board members in a clear and impactful way.',
    },
    {
      id: 'sustainable-finance-initiatives',
      title: 'Implementing Sustainable Finance Initiatives',
      date: 'April 10, 2023',
      category: 'ESG & Sustainability',
      excerpt: 'A practical guide to integrating sustainability into financial strategy and reporting frameworks.',
    },
    {
      id: 'finance-talent-retention',
      title: 'Attracting and Retaining Top Finance Talent',
      date: 'March 22, 2023',
      category: 'Talent Management',
      excerpt: 'Strategies for building and maintaining a high-performing finance team in a competitive job market.',
    },
    {
      id: 'financial-risk-management',
      title: 'Advanced Financial Risk Management Techniques',
      date: 'March 5, 2023',
      category: 'Risk Management',
      excerpt: 'Innovative approaches to identifying, assessing, and mitigating financial risks in today\'s complex business environment.',
    },
    {
      id: 'finance-digital-transformation',
      title: 'Leading Finance Digital Transformation Projects',
      date: 'February 18, 2023',
      category: 'Digital Transformation',
      excerpt: 'A step-by-step guide to successfully implementing digital transformation initiatives within finance departments.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources & Insights</h1>
            <p className="text-xl mb-0 text-primary-100">
              Access valuable content, tools, and insights to enhance your financial leadership.
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
                placeholder="Search resources..."
                className="pl-10 pr-4 py-2 w-full border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div className="relative">
              <select className="appearance-none pl-10 pr-8 py-2 border border-secondary-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                <option value="">All Categories</option>
                <option value="leadership">Leadership</option>
                <option value="digital-transformation">Digital Transformation</option>
                <option value="esg-sustainability">ESG & Sustainability</option>
                <option value="risk-management">Risk Management</option>
                <option value="talent-management">Talent Management</option>
                <option value="technology">Technology</option>
              </select>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiFilter className="text-secondary-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-secondary-100">
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-primary-700 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">Resource Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-primary-600 mb-2">
                    <FiFileText className="mr-2" />
                    <span>{resource.type}</span>
                    <span className="mx-2">•</span>
                    <span>{resource.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-secondary-700 mb-4">
                    {resource.description}
                  </p>
                  <Link 
                    href={`/resources/${resource.id}`} 
                    className="inline-block px-4 py-2 bg-primary-700 text-white font-medium rounded-md hover:bg-primary-800 transition-colors"
                  >
                    Access Resource
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <Link 
              href="/resources/articles" 
              className="mt-4 md:mt-0 text-primary-700 font-medium hover:text-primary-800 transition-colors"
            >
              View All Articles
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-secondary-100">
                <div className="p-6">
                  <div className="flex items-center text-primary-600 mb-2">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-secondary-700 mb-4">
                    {article.excerpt}
                  </p>
                  <Link 
                    href={`/resources/articles/${article.id}`} 
                    className="text-primary-700 font-medium hover:text-primary-800 transition-colors"
                  >
                    Read Article &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Resource Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100 flex flex-col items-center text-center">
              <div className="bg-primary-50 p-4 rounded-full mb-4">
                <FiFileText className="text-primary-700 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Whitepapers & Research</h3>
              <p className="text-secondary-600 mb-4">
                In-depth analysis and research on key topics affecting financial leadership.
              </p>
              <Link 
                href="/resources/whitepapers" 
                className="text-primary-700 font-medium hover:text-primary-800 transition-colors"
              >
                Browse Whitepapers
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100 flex flex-col items-center text-center">
              <div className="bg-primary-50 p-4 rounded-full mb-4">
                <FiVideo className="text-primary-700 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Webinars & Videos</h3>
              <p className="text-secondary-600 mb-4">
                Recorded presentations, panel discussions, and educational content.
              </p>
              <Link 
                href="/resources/webinars" 
                className="text-primary-700 font-medium hover:text-primary-800 transition-colors"
              >
                Watch Webinars
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100 flex flex-col items-center text-center">
              <div className="bg-primary-50 p-4 rounded-full mb-4">
                <FiDownload className="text-primary-700 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Templates & Tools</h3>
              <p className="text-secondary-600 mb-4">
                Practical resources to help you implement best practices in your organization.
              </p>
              <Link 
                href="/resources/templates" 
                className="text-primary-700 font-medium hover:text-primary-800 transition-colors"
              >
                Access Templates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Member Resources CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Exclusive Member Resources</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-100">
            Join Finanza Zuid to access our premium resource library, including exclusive research, benchmarking data, and specialized tools for CFOs.
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