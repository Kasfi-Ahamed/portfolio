export interface Recommendation {
  name: string;
  role: string;
  organisation: string;
  quote: string;
  linkedinUrl: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'AI/ML' | 'Web';
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  images: string[];
}

export interface Skill {
  name: string;
  category: 'AI/ML' | 'Software Dev';
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Interest {
  name: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string | string[];
  keyAchievement?: string;
}

export interface ResearchPaper {
  title: string;
  authors: string;
  venue: string;
  year: string;
  url?: string;
  citations?: number;
  type?: 'Journal' | 'Conference' | 'Workshop' | 'Preprint' | 'Book Chapter';
  researchArea?: string;
}

export const personalInfo = {
  name: 'Kasfi Ahamed',
  title: 'Applied AI/ML Engineer',
  subtitle: 'Building AI-powered products and production-grade software systems.',
  summary: `I'm an Applied AI/ML Engineer with strong experience in software engineering, focused on building intelligent systems that solve real-world problems. My work sits at the intersection of machine learning and production-grade software, where models are not just trained, but engineered into reliable, scalable applications.

I enjoy working across the full lifecycle of AI-driven systems from developing and evaluating models to integrating them into robust web applications. With a solid foundation in full-stack development, I focus on writing clean, maintainable code and designing systems that perform well in real-world environments.

I'm particularly interested in applied AI, production ML systems, and building software that delivers practical impact rather than prototypes. I value clarity, reliability, and thoughtful engineering in everything I build.`,
  email: 'kasfikas@gmail.com',
  photo: '/photo.jpg', // Place your photo at /public/photo.jpg
  github: 'https://github.com/Kasfi-Ahamed',
  linkedin: 'https://www.linkedin.com/in/kasfi-ahamed-8a81241b4',
  resume: '/resume.pdf',
};

export const skills: Skill[] = [
  // AI/ML
  { name: 'Python', category: 'AI/ML' },
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'PyTorch', category: 'AI/ML' },
  { name: 'ML Pipelines', category: 'AI/ML' },
  { name: 'Model Evaluation', category: 'AI/ML' },
  { name: 'LLM Applications', category: 'AI/ML' },
  { name: 'NLP', category: 'AI/ML' },
  { name: 'Computer Vision', category: 'AI/ML' },
  { name: 'Deep Learning', category: 'AI/ML' },
  { name: 'Data Science', category: 'AI/ML' },
  
  // Software Dev
  { name: 'React', category: 'Software Dev' },
  { name: 'TypeScript', category: 'Software Dev' },
  { name: 'Node.js', category: 'Software Dev' },
  { name: 'REST APIs', category: 'Software Dev' },
  { name: 'GraphQL', category: 'Software Dev' },
  { name: 'Testing', category: 'Software Dev' },
  { name: 'Git', category: 'Software Dev' },
  { name: 'PostgreSQL', category: 'Software Dev' },
  { name: 'MongoDB', category: 'Software Dev' },
  { name: 'JavaScript', category: 'Software Dev' },
];

export const recommendations: Recommendation[] = [
  // Placeholder - replace with actual recommendations
  {
    name: 'LinkedIn Recommendations',
    role: 'Coming Soon',
    organisation: '',
    quote: 'LinkedIn recommendations will appear here once added.',
    linkedinUrl: personalInfo.linkedin,
  },
];

export const projects: Project[] = [
  {
    slug: 'book-api',
    title: 'Book API',
    description: 'RESTful API for managing books with Docker containerization and CI/CD pipeline integration.',
    longDescription: 'A production-ready REST API for book management built with Node.js and JavaScript. The project includes comprehensive testing, Docker containerization for easy deployment, and Jenkins CI/CD pipeline integration. Features include book CRUD operations, proper error handling, and scalable architecture designed for production environments.',
    category: 'Web',
    techStack: ['JavaScript', 'Node.js', 'REST API', 'Docker', 'Jenkins', 'CI/CD', 'Testing'],
    githubUrl: 'https://github.com/Kasfi-Ahamed/book-api',
    liveUrl: '#',
    highlights: [
      'Built RESTful API with comprehensive CRUD operations',
      'Implemented Docker containerization for deployment',
      'Set up CI/CD pipeline with Jenkins for automated testing and deployment',
    ],
    images: ['/project-placeholder.jpg'],
  },
  {
    slug: 'travel-bot',
    title: 'Travel Bot',
    description: 'AI-powered travel assistant bot for planning trips and providing travel recommendations.',
    longDescription: 'An intelligent travel bot that helps users plan trips, find destinations, and get personalized travel recommendations. Built with AI/ML technologies, this bot understands natural language queries and provides contextual travel advice, itinerary suggestions, and destination information.',
    category: 'AI/ML',
    techStack: ['Python', 'NLP', 'Machine Learning', 'API Integration', 'Natural Language Processing'],
    githubUrl: 'https://github.com/Kasfi-Ahamed/travel-bot-project',
    liveUrl: '#',
    highlights: [
      'Implemented natural language understanding for travel queries',
      'Built recommendation system for personalized travel suggestions',
      'Integrated with travel APIs for real-time information',
    ],
    images: ['/project-placeholder.jpg'],
  },
  {
    slug: 'companion-ai',
    title: 'Companion AI',
    description: 'Intelligent AI companion for conversation, assistance, and personalized interactions.',
    longDescription: 'A sophisticated AI companion application that provides conversational AI capabilities, personal assistance, and contextual interactions. The system uses advanced NLP and machine learning to understand user intent, maintain conversation context, and provide helpful responses across various domains.',
    category: 'AI/ML',
    techStack: ['Python', 'LLM', 'NLP', 'Machine Learning', 'Conversational AI', 'API Development'],
    githubUrl: 'https://github.com/Kasfi-Ahamed/companion-ai',
    liveUrl: '#',
    highlights: [
      'Developed conversational AI with context awareness',
      'Implemented personalized interaction system',
      'Built scalable architecture for real-time responses',
    ],
    images: ['/project-placeholder.jpg'],
  },
  {
    slug: 'gold-price-prediction',
    title: 'Gold Price Prediction',
    description: 'Machine learning model to predict gold prices using historical data and market indicators.',
    longDescription: 'A data science project that uses machine learning algorithms to predict gold prices based on historical market data. Built with Jupyter Notebook, this project demonstrates skills in data analysis, feature engineering, and predictive modeling. The model analyzes various market indicators and trends to provide accurate price predictions.',
    category: 'AI/ML',
    techStack: ['Python', 'Jupyter Notebook', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
    githubUrl: 'https://github.com/Kasfi-Ahamed/Gold-price-Prediction',
    liveUrl: '#',
    highlights: [
      'Implemented multiple ML algorithms for price prediction',
      'Analyzed historical gold price trends and patterns',
      'Created visualizations for data insights and model performance',
    ],
    images: ['/project-placeholder.jpg'],
  },
  {
    slug: 'parking-data-analysis',
    title: 'Parking Data Analysis',
    description: 'Data analysis project examining parking patterns and utilization rates.',
    longDescription: 'A comprehensive data analysis project that explores parking data to identify patterns, peak usage times, and optimization opportunities. This project demonstrates skills in data cleaning, exploratory data analysis, and data visualization to extract meaningful insights from real-world datasets.',
    category: 'AI/ML',
    techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    githubUrl: 'https://github.com/Kasfi-Ahamed/Parking-data-Analysis',
    liveUrl: '#',
    highlights: [
      'Performed comprehensive data analysis on parking datasets',
      'Identified usage patterns and peak times',
      'Created visualizations for data-driven insights',
    ],
    images: ['/project-placeholder.jpg'],
  },
  {
    slug: 'storage-management-system',
    title: 'Storage Management System',
    description: 'System for managing and tracking storage inventory and operations.',
    longDescription: 'A storage management system designed to efficiently track inventory, manage storage operations, and provide real-time insights into storage utilization. This project demonstrates skills in system design, database management, and creating practical solutions for business operations.',
    category: 'Web',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Database'],
    githubUrl: 'https://github.com/Kasfi-Ahamed/Storage-Management-system',
    liveUrl: '#',
    highlights: [
      'Designed efficient storage tracking system',
      'Implemented inventory management features',
      'Created user-friendly interface for operations',
    ],
    images: ['/project-placeholder.jpg'],
  },
  {
    slug: 'partpicker',
    title: 'Part Picker',
    description: 'Web application for selecting and comparing computer parts and components.',
    longDescription: 'A PHP-based web application that helps users select and compare computer parts. The system allows users to browse components, compare specifications, and build custom configurations. This project demonstrates skills in PHP development, database integration, and creating interactive web applications.',
    category: 'Web',
    techStack: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    githubUrl: 'https://github.com/Kasfi-Ahamed/Partpicker',
    liveUrl: '#',
    highlights: [
      'Built interactive part selection interface',
      'Implemented comparison functionality',
      'Created database-driven component catalog',
    ],
    images: ['/project-placeholder.jpg'],
  },
  {
    slug: 'coursera-webdev',
    title: 'Coursera Web Development',
    description: 'Web development projects and coursework from Coursera courses.',
    longDescription: 'A collection of web development projects completed as part of Coursera courses. This repository showcases learning progress and practical implementation of web development concepts including HTML, CSS, JavaScript, and modern web technologies.',
    category: 'Web',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Kasfi-Ahamed/Coursera-webdev',
    liveUrl: '#',
    highlights: [
      'Completed comprehensive web development coursework',
      'Built multiple interactive web projects',
      'Demonstrated proficiency in modern web technologies',
    ],
    images: ['/project-placeholder.jpg'],
  },
  {
    slug: 'static-portfolio-website',
    title: 'Static Portfolio Website',
    description: 'Personal portfolio website built with HTML and CSS.',
    longDescription: 'A clean and professional static portfolio website showcasing projects and skills. Built with pure HTML and CSS, this project demonstrates strong fundamentals in web design, responsive layout, and creating visually appealing user interfaces without frameworks.',
    category: 'Web',
    techStack: ['HTML', 'CSS'],
    githubUrl: 'https://github.com/Kasfi-Ahamed/Static-portfolio-website-with-css-and-Html',
    liveUrl: '#',
    highlights: [
      'Created responsive design with pure CSS',
      'Implemented clean and modern UI',
      'Demonstrated strong HTML/CSS fundamentals',
    ],
    images: ['/project-placeholder.jpg'],
  },
];

export const experience = [
  {
    title: 'Ambassador',
    company: 'AllCrew',
    period: 'Sep 2025 - Present',
    location: 'Melbourne, VIC',
    description: [
      'Represented the AllCrew brand in student communities and events.',
      'Engaged with students to promote app features and assist with onboarding.',
      'Provided customer support, answered product enquiries, and encouraged user adoption.',
      'Offered feedback to improve user experience and community engagement.',
    ],
    keyAchievement: 'Boosted app adoption among students by 30% through proactive onboarding, community engagement, and consistent product support.',
  },
  {
    title: 'Network & Security Engineer',
    company: 'Computer Services Limited',
    period: 'Jul 2023 - Oct 2024',
    location: 'Dhaka, Bangladesh',
    description: [
      'Designed and deployed automation scripts for network monitoring and issue alerts, improving incident response speed by 20%.',
      'Administered and secured digital election systems for national infrastructure.',
      'Managed data centres with 99.9% uptime and enhanced disaster recovery systems.',
      'Worked extensively in Linux-based environments for server configuration, scripting, and automation.',
    ],
    keyAchievement: 'Improved incident response speed by 20% through automated monitoring and alerting scripts.',
  },
  {
    title: 'Campus Leader',
    company: 'Applink (Banglalink)',
    period: 'Sep 2022 - Dec 2023',
    location: 'Dhaka, Bangladesh',
    description: [
      'Led student engagement and digital activation campaigns, improving product adoption across university campuses.',
      'Conducted product research, user feedback collection, and market trend analysis to support product development teams.',
    ],
    keyAchievement: 'Increased student engagement by 45% through targeted campus and digital campaigns.',
  },
];

export const education = [
  {
    degree: 'Master of Applied Artificial Intelligence',
    institution: 'Deakin University, VIC, Australia',
    period: '2025 - Present',
  },
  {
    degree: 'Bachelor of Computer Science and Engineering',
    institution: 'BRAC University, Bangladesh',
    period: '2019 - 2023',
  },
];

export const interests: Interest[] = [
  { name: 'Research & Innovation' },
  { name: 'Gaming' },
  { name: 'Travelling' },
  { name: 'Movie Critique' },
];

export const certifications: Certification[] = [
  {
    name: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft',
    date: 'May 2025',
    credentialUrl: 'https://www.linkedin.com/in/kasfi-ahamed-8a81241b4/details/certifications/',
  },
  {
    name: 'Problem Solving (Basic) Certificate',
    issuer: 'HackerRank',
    date: 'Jun 2023',
    credentialUrl: 'https://www.linkedin.com/in/kasfi-ahamed-8a81241b4/details/certifications/',
  },
  {
    name: 'Python (Basic) Certificate',
    issuer: 'HackerRank',
    date: 'Jun 2023',
    credentialUrl: 'https://www.linkedin.com/in/kasfi-ahamed-8a81241b4/details/certifications/',
  },
];

export const googleScholarUrl = 'https://scholar.google.com/citations?user=jAK9k7kAAAAJ&hl=en';

export const researchStats = {
  totalPapers: 0, // Update with your actual count
  totalCitations: 0, // Update with your actual count
  hIndex: 0, // Update with your actual h-index
  i10Index: 0, // Update with your actual i10-index
};

export const researchPapers: ResearchPaper[] = [
  // Add your research papers here
  // Example:
  // {
  //   title: 'Paper Title',
  //   authors: 'Author1, Author2, Your Name',
  //   venue: 'Conference/Journal Name',
  //   year: '2024',
  //   citations: 10,
  //   url: 'https://paper-url.com',
  //   type: 'Conference',
  //   researchArea: 'Machine Learning',
  // },
];

