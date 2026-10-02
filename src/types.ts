export interface GoogleReview {
  id: string;
  reviewerName: string;
  rating: number;
  text: string;
  originalText?: string;
  badge: string;
  highlight?: string;
  tag?: string;
  avatarImage?: string;
  role?: string;
  location?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Interiors' | '3D Visualization';
  location: string;
  year: string;
  area?: string;
  tagline: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  features: string[];
  render3DType?: 'Photorealistic Exterior' | 'Interior Living' | 'Commercial Masterplan' | 'Spatial Planning';
  beforeAfterComparison?: {
    beforeLabel: string;
    beforeImage: string;
    afterLabel: string;
    afterImage: string;
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  iconName: string;
  image: string;
}
