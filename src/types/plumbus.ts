export interface PlumbusFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefit: string;
}

export interface PlumbusModel {
  id: string;
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
  description: string;
  buttonText: string;
}

export interface ManufacturingStep {
  id: number;
  title: string;
  description: string;
  technicalDetails: string;
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface PlumbusHotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  description: string;
  feature: string;
}

export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
  repeat?: number;
}

export interface ScrollAnimationProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
}