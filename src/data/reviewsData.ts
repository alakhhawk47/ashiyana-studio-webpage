import { GoogleReview } from '../types';

export const GOOGLE_REVIEWS_METRICS = {
  rating: 4.9,
  totalReviewsDisplay: "43+",
  source: "Google Reviews",
  verifiedTag: "100% Verified Client Feedback",
  heading: "CLIENT EXPERIENCES",
  subheading: "04 / CLIENT STORIES",
  quote: "Design is ultimately measured by how a space feels to the people who live and work in it.",
};

export const REAL_GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "review-01",
    reviewerName: "Prashant Singh",
    rating: 5,
    text: "Awesome office, nice place to work and a well experienced architect who makes your dreams come true by designing your house.",
    badge: "Google Review",
    highlight: "makes your dreams come true by designing your house",
    tag: "Architecture & Residential Design",
    role: "Villa Owner",
    location: "Sanjay Place, Agra",
    avatarImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "review-02",
    reviewerName: "Kc Anand",
    rating: 5,
    text: "Unique interior designs and a very responsible team in Agra. Their modern interior and architectural work really stands out.",
    originalText: "Unique design interiors, a very responsible team in Agra, with really modern interior design and architectural work.",
    badge: "Google Review",
    highlight: "Unique interior designs and a very responsible team in Agra",
    tag: "Modern Interiors & Architecture",
    role: "Commercial Executive",
    location: "Civil Lines, Agra",
    avatarImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "review-03",
    reviewerName: "Rohit Anand",
    rating: 5,
    text: "The work is very good, with excellent finishing and unique interior design.",
    originalText: "Work is very nice finishing is best in unique design interior",
    badge: "Google Review",
    highlight: "excellent finishing and unique interior design",
    tag: "Finishing & Interior Design",
    role: "Turnkey Client",
    location: "Dayalbagh, Agra",
    avatarImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "review-04",
    reviewerName: "Vivek Sheel",
    rating: 5,
    text: "Excellent planning and 3D designing.",
    originalText: "Gazab ki planning and 3d designing karte ho bhai",
    badge: "Google Review",
    highlight: "Excellent planning and 3D designing",
    tag: "3D Planning & Visualization",
    role: "Civil Engineer & Homeowner",
    location: "Fatehabad Road, Agra",
    avatarImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "review-05",
    reviewerName: "Renu Dhaked",
    rating: 5,
    text: "The 3D work is very nice, with unique designs.",
    originalText: "3ds work is very nice and unique design ...",
    badge: "Google Review",
    highlight: "3D work is very nice, with unique designs",
    tag: "3D Design & Concept Modeling",
    role: "Residence Owner",
    location: "Kamla Nagar, Agra",
    avatarImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "review-06",
    reviewerName: "Yash Pal",
    rating: 5,
    text: "Very nice 3D work and planning.",
    originalText: "nice your 3D work and planning",
    badge: "Google Review",
    highlight: "Very nice 3D work and planning",
    tag: "Spatial Planning & 3D Render",
    role: "Real Estate Developer",
    location: "Shastri Puram, Agra",
    avatarImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "review-07",
    reviewerName: "Man Singh",
    rating: 5,
    text: "Nice work and a very good overall experience.",
    originalText: "Nice work with best work experience",
    badge: "Google Review",
    highlight: "Nice work and a very good overall experience",
    tag: "Client Experience & Execution",
    role: "Duplex Villa Client",
    location: "Sikandra, Agra",
    avatarImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "review-08",
    reviewerName: "Vimal Kumar",
    rating: 5,
    text: "Nice work and very good 3D planning.",
    originalText: "Nice work planing in 3D",
    badge: "Google Review",
    highlight: "Nice work and very good 3D planning",
    tag: "3D Architectural Planning",
    role: "Farmhouse Client",
    location: "Shamshabad Road, Agra",
    avatarImage: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "review-09",
    reviewerName: "Sujit Kumar",
    rating: 5,
    text: "Nice work in interior designing.",
    originalText: "Nice work in interior designing work",
    badge: "Google Review",
    highlight: "Nice work in interior designing",
    tag: "Interior Designing",
    role: "Apartment Owner",
    location: "Civil Lines, Agra",
    avatarImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
  }
];

export const PROOF_3D_REVIEWS = [
  {
    quote: "Excellent planning and 3D designing.",
    reviewer: "Vivek Sheel",
    role: "Google Review",
    aspect: "3D Floorplan & Spatial Flow"
  },
  {
    quote: "The 3D work is very nice, with unique designs.",
    reviewer: "Renu Dhaked",
    role: "Google Review",
    aspect: "Photorealistic Elevation"
  },
  {
    quote: "Very nice 3D work and planning.",
    reviewer: "Yash Pal",
    role: "Google Review",
    aspect: "Turnkey Execution Alignment"
  }
];
