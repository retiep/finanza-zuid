// Mock data for testing the site without actual backend services

// Mock events
export const mockEvents = [
  {
    _id: '1',
    title: 'Annual CFO Conference 2023',
    slug: { current: 'annual-cfo-conference-2023' },
    date: '2023-11-15',
    time: '09:00',
    location: 'Amsterdam',
    description: 'Join us for the premier gathering of financial leaders in the region. Network with peers, learn from industry experts, and gain insights into the latest financial trends.',
    category: 'conference',
    featured: true,
    image: {
      asset: {
        _id: 'image-1',
        url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZXxlbnwwfHwwfHx8MA%3D%3D'
      }
    }
  },
  {
    _id: '2',
    title: 'Financial Risk Management Workshop',
    slug: { current: 'financial-risk-management-workshop' },
    date: '2023-12-05',
    time: '14:00',
    location: 'Rotterdam',
    description: 'A hands-on workshop focused on modern risk management strategies for financial professionals. Learn practical techniques to identify, assess, and mitigate financial risks.',
    category: 'workshop',
    featured: true,
    image: {
      asset: {
        _id: 'image-2',
        url: 'https://images.unsplash.com/photo-1558403194-611308249627?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtzaG9wfGVufDB8fDB8fHww'
      }
    }
  },
  {
    _id: '3',
    title: 'Networking Dinner: Future of Finance',
    slug: { current: 'networking-dinner-future-of-finance' },
    date: '2023-12-15',
    time: '18:30',
    location: 'Utrecht',
    description: 'An exclusive evening of networking and discussion on the future of finance. Connect with fellow CFOs and financial leaders over dinner and engaging conversation.',
    category: 'networking',
    featured: false,
    image: {
      asset: {
        _id: 'image-3',
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlubmVyfGVufDB8fDB8fHww'
      }
    }
  }
];

// Mock resources
export const mockResources = [
  {
    _id: '1',
    title: "CFO's Guide to Digital Transformation",
    slug: { current: 'cfo-guide-digital-transformation' },
    type: 'whitepaper',
    category: 'technology',
    description: 'A comprehensive guide for CFOs navigating digital transformation in their organizations. Learn how to leverage technology to drive financial efficiency and growth.',
    featured: true,
    image: {
      asset: {
        _id: 'resource-1',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbHxlbnwwfHwwfHx8MA%3D%3D'
      }
    }
  },
  {
    _id: '2',
    title: 'ESG Reporting Standards for 2023',
    slug: { current: 'esg-reporting-standards-2023' },
    type: 'ebook',
    category: 'sustainability',
    description: 'Stay compliant with the latest ESG reporting standards. This e-book provides a detailed overview of current requirements and best practices for financial reporting.',
    featured: true,
    image: {
      asset: {
        _id: 'resource-2',
        url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1c3RhaW5hYmlsaXR5fGVufDB8fDB8fHww'
      }
    }
  },
  {
    _id: '3',
    title: 'Financial Forecasting Template',
    slug: { current: 'financial-forecasting-template' },
    type: 'template',
    category: 'financial-strategy',
    description: 'A ready-to-use Excel template for financial forecasting. Includes pre-built formulas and dashboards to streamline your financial planning process.',
    featured: false,
    image: {
      asset: {
        _id: 'resource-3',
        url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZWNhc3R8ZW58MHx8MHx8fDA%3D'
      }
    }
  }
];

// Mock articles
export const mockArticles = [
  {
    _id: '1',
    title: 'The Evolving Role of the Modern CFO',
    slug: { current: 'evolving-role-modern-cfo' },
    excerpt: 'How the CFO position has transformed from financial steward to strategic business partner and innovation catalyst.',
    publishedAt: '2023-10-15T10:00:00Z',
    category: 'leadership',
    author: {
      name: 'Jan de Vries',
      image: {
        asset: {
          _id: 'author-1',
          url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'
        }
      }
    },
    mainImage: {
      asset: {
        _id: 'article-1',
        url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhlY3V0aXZlfGVufDB8fDB8fHww'
      }
    }
  },
  {
    _id: '2',
    title: 'Navigating Economic Uncertainty: Strategies for Financial Leaders',
    slug: { current: 'navigating-economic-uncertainty' },
    excerpt: 'Practical approaches for CFOs to guide their organizations through periods of economic volatility and market disruption.',
    publishedAt: '2023-11-02T09:30:00Z',
    category: 'financial-strategy',
    author: {
      name: 'Maria Jansen',
      image: {
        asset: {
          _id: 'author-2',
          url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
        }
      }
    },
    mainImage: {
      asset: {
        _id: 'article-2',
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbm9taWN8ZW58MHx8MHx8fDA%3D'
      }
    }
  },
  {
    _id: '3',
    title: 'Implementing AI in Finance: Case Studies and Lessons',
    slug: { current: 'implementing-ai-finance-case-studies' },
    excerpt: 'Real-world examples of how financial departments are successfully leveraging artificial intelligence to transform operations.',
    publishedAt: '2023-11-20T14:15:00Z',
    category: 'technology',
    author: {
      name: 'Thomas Bakker',
      image: {
        asset: {
          _id: 'author-3',
          url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'
        }
      }
    },
    mainImage: {
      asset: {
        _id: 'article-3',
        url: 'https://images.unsplash.com/photo-1677442135136-760c813a743d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWklMjBmaW5hbmNlfGVufDB8fDB8fHww'
      }
    }
  }
];

// Mock user profile for testing member area
export const mockUserProfile = {
  id: 'user-1',
  email: 'test@example.com',
  first_name: 'Jan',
  last_name: 'Dekker',
  company: 'Example Corp',
  job_title: 'CFO',
  phone: '+31612345678',
  avatar_url: null,
  created_at: '2023-01-15T08:30:00Z'
};

// Mock membership for testing member area
export const mockMembership = {
  id: 'membership-1',
  user_id: 'user-1',
  status: 'active',
  start_date: '2023-01-15T08:30:00Z',
  end_date: '2024-01-15T08:30:00Z',
  plans: {
    id: 'plan-1',
    name: 'Professional',
    description: 'Full access to all resources and events',
    price: 299,
    features: ['Exclusive content access', 'Event discounts', 'Networking opportunities']
  }
};

// Mock event registrations for testing member area
export const mockEventRegistrations = [
  {
    id: 'reg-1',
    user_id: 'user-1',
    event_id: '1',
    status: 'confirmed',
    registration_date: '2023-10-20T14:30:00Z',
    events: {
      id: '1',
      title: 'Annual CFO Conference 2023',
      date: '2023-11-15',
      location: 'Amsterdam'
    }
  },
  {
    id: 'reg-2',
    user_id: 'user-1',
    event_id: '2',
    status: 'confirmed',
    registration_date: '2023-11-01T09:15:00Z',
    events: {
      id: '2',
      title: 'Financial Risk Management Workshop',
      date: '2023-12-05',
      location: 'Rotterdam'
    }
  }
];

// Override Sanity client functions with mock data
export const mockSanityFunctions = {
  getAllEvents: () => Promise.resolve(mockEvents),
  getFeaturedEvents: () => Promise.resolve(mockEvents.filter(event => event.featured)),
  getEventBySlug: (slug: string) => Promise.resolve(mockEvents.find(event => event.slug.current === slug) || null),
  
  getAllResources: () => Promise.resolve(mockResources),
  getFeaturedResources: () => Promise.resolve(mockResources.filter(resource => resource.featured)),
  getResourceBySlug: (slug: string) => Promise.resolve(mockResources.find(resource => resource.slug.current === slug) || null),
  
  getAllArticles: () => Promise.resolve(mockArticles),
  getArticleBySlug: (slug: string) => Promise.resolve(mockArticles.find(article => article.slug.current === slug) || null)
};

// Override Supabase client functions with mock data
export const mockSupabaseFunctions = {
  getUserProfile: () => Promise.resolve(mockUserProfile),
  updateUserProfile: (userId: string, updates: any) => Promise.resolve({...mockUserProfile, ...updates}),
  
  getEventRegistrations: () => Promise.resolve(mockEventRegistrations),
  registerForEvent: () => Promise.resolve({id: 'new-reg', status: 'confirmed'}),
  cancelEventRegistration: () => Promise.resolve({status: 'cancelled'}),
  
  getUserMembership: () => Promise.resolve(mockMembership),
  checkActiveMembership: () => Promise.resolve(true)
}; 