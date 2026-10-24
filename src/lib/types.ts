export interface SiteSetting {
  id?: number;
  site_name: string;
  tagline: string;
  description: string;
  logo_url: string;
  favicon_url?: string;
  hero_video_url: string;
  hero_headline: string;
  hero_subheadline: string;
  phone: string;
  email: string;
  address: string;
  booking_url: string;
  facebook_url?: string;
  instagram_url?: string;
  telegram_url?: string;
  check_in_time?: string;
  check_out_time?: string;
}

export type RoomAmenities = Record<string, string[]>;

export interface Room {
  id: number;
  title: string;
  slug: string;
  subtitle: string;
  short_description: string;
  description: string;
  room_size: string;
  capacity: string;
  bed_type: string;
  view: string;
  starting_price?: number;
  featured_image: string;
  gallery_images: string[];
  amenities: RoomAmenities;
  is_featured: boolean;
  is_active: boolean;
  order: number;
}

export interface DiningVenue {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  area: string;
  capacity: string;
  food_type: string;
  drinks_type: string;
  meal_times: string;
  hero_image: string;
  gallery_images: string[];
  features?: string[];
}

export interface WellnessItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  image: string;
  category: string;
  order: number;
}

export interface Activity {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  order: number;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: 'all' | 'pool' | 'mountain' | 'dining' | 'wellness' | 'grounds';
  image_url: string;
  alt_text?: string;
  order: number;
}

export interface InquiryPayload {
  name: string;
  email: string;
  phone?: string;
  check_in?: string;
  check_out?: string;
  guests?: number;
  room_preference?: string;
  subject?: string;
  message: string;
}
