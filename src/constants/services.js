export const SERVICES_DESCRIPTION =
  'Choose the perfect package for your project needs. All packages include professional development and ongoing support.';

export const SERVICES = [
  {
    id: 'basic',
    title: 'Basic Website',
    price: '$299',
    period: '/ project',
    delivery: '1-2 weeks delivery',
    features: [
      'Responsive Design',
      'Up to 5 Pages',
      'Contact Form',
      'Basic SEO',
      'Mobile Optimization',
      '1 Month Support',
    ],
    color: 'blue',
    buttonText: 'Get Started',
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Application',
    price: '$799',
    period: '/ project',
    delivery: '3-4 weeks delivery',
    features: [
      'Custom Web Application',
      'Database Integration',
      'User Authentication',
      'Admin Dashboard',
      'API Development',
      '3 Months Support',
    ],
    color: 'purple',
    buttonText: 'Get Started',
    popular: true,
  },
  {
    id: 'datascience',
    title: 'Data Science Project',
    price: '$599',
    period: '/ project',
    delivery: '2-3 weeks delivery',
    features: [
      'Data Analysis',
      'Machine Learning Models',
      'Interactive Dashboards',
      'Data Visualization',
      'Report Generation',
      '2 Months Support',
    ],
    color: 'green',
    buttonText: 'Get Started',
  },
];

export const SERVICE_COLORS = {
  blue: {
    bg: 'bg-blue-500',
    hover: 'hover:bg-blue-600',
    text: 'text-blue-600',
    border: 'border-blue-500',
  },
  purple: {
    bg: 'bg-purple-500',
    hover: 'hover:bg-purple-600',
    text: 'text-purple-600',
    border: 'border-purple-500',
  },
  green: {
    bg: 'bg-green-500',
    hover: 'hover:bg-green-600',
    text: 'text-green-600',
    border: 'border-green-500',
  },
};

