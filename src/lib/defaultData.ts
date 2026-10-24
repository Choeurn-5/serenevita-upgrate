import { SiteSetting, Room, DiningVenue, WellnessItem, Activity, GalleryItem } from './types';

export const DEFAULT_SETTINGS: SiteSetting = {
  site_name: 'Serene Vita Retreat',
  tagline: 'A REGENERATIVE LUXURY ESCAPE TO RECHARGE, EXPLORE, AND CONNECT.',
  description: 'Nestled in the serene coastal town of Kep City, Cambodia, our resort offers the perfect blend of privacy, comfort, and natural beauty with exclusive Villas with Private Pool and Deluxe Double Rooms.',
  logo_url: '/storage/uploads/cropped-Untitled-2-1.webp',
  hero_video_url: 'https://youtu.be/7DX7KlCHO2s',
  hero_headline: 'Serenevita',
  hero_subheadline: 'A REGENERATIVE LUXURY ESCAPE TO RECHARGE, EXPLORE, AND CONNECT.',
  phone: '+855 15 255 529',
  email: 'info@serenevita.asia',
  address: 'Street 2309, corner of Street 2336, Kep City, Cambodia',
  booking_url: 'https://app.inn-connect.com/book2/?p=Serene+Vita+Retreat',
  check_in_time: '14:00',
  check_out_time: '12:00',
};

export const DEFAULT_ROOMS: Room[] = [
  {
    id: 1,
    title: 'Serene Private Pool Villa',
    slug: 'serene-pool-suite',
    subtitle: 'Private Pool & Garden Sanctuary',
    short_description: 'A seamless blend of indoor comfort and outdoor luxury design, featuring a private swimming pool, cozy seating area, and spacious outdoor bathtub.',
    description: 'Designed for guests seeking absolute seclusion and tranquil privacy, the Serene Private Pool Villa blends contemporary indoor comfort with outdoor luxury design. Enjoy your own private swimming pool, relax in the cozy seating area overlooking lush gardens, or unwind in the spacious outdoor bathtub under the sky.',
    room_size: 'Approximately 80 square meters',
    capacity: '2 Adults',
    bed_type: 'Super King Size bed (2mx2m)',
    view: 'Private pool and garden view',
    starting_price: 175.20,
    featured_image: '/storage/uploads/Pool-exterior-04-1.webp',
    gallery_images: [
      '/storage/uploads/Pool-interior-01.webp',
      '/storage/uploads/Pool-interior-02.webp',
      '/storage/uploads/Pool-interior-03.webp',
      '/storage/uploads/Pool-interior-09.webp',
      '/storage/uploads/Pool-exterior-02.webp',
    ],
    amenities: {
      'Room Highlights': [
        'Approximately 80 square meters',
        'Blend of indoor comfort and outdoor luxury design',
        'Super King Size bed (2mx2m)',
        'Private swimming pool',
        'Cozy seating area',
        'Private pool and garden view',
        'Full access to resort facilities',
      ],
      'Bathroom & Wellness': [
        'Modern ensuite bathroom with rain shower',
        'Spacious outdoor bathtub',
        'Double vanity sinks',
        'Essential luxury and eco-friendly toiletries',
      ],
      'Living & Workspace': [
        'Dedicated work desk',
        'Make up desk and zoom in mirror',
        'Safe',
      ],
      'Refreshments & Tech': [
        'Mini bar counter and fridge',
        'Complimentary espresso coffee capsule machine',
        'Filtered drinking water',
        'High speed Wifi',
      ],
    },
    is_featured: true,
    is_active: true,
    order: 1
  },
  {
    id: 2,
    title: 'Serene Deluxe Room',
    slug: 'serene-mount-view',
    subtitle: 'Minimalist Contemporary Garden Sanctuary',
    short_description: 'Minimalist and elegant contemporary design with natural daylight, featuring a King Size bed, cozy seating area, and peaceful garden courtyard views.',
    description: 'Minimalist and elegant contemporary design bathed in natural daylight. The Serene Deluxe Room offers cozy, well-appointed interiors with garden courtyard views—ideal for nature lovers and travelers seeking a peaceful, restorative escape in Kep.',
    room_size: 'Approximately 40 square meters',
    capacity: '2 Adults',
    bed_type: 'King Size bed (1m80x2m)',
    view: 'Garden courtyard view',
    starting_price: 86.25,
    featured_image: '/storage/uploads/Mount-View-In02-2.webp',
    gallery_images: [
      '/storage/uploads/Mount-View-In02-3.webp',
      '/storage/uploads/Mount-View-In11.webp',
      '/storage/uploads/Mount-View-In06-1.webp',
      '/storage/uploads/Mount-View-In05.webp',
      '/storage/uploads/Mount-View-ex01.jpg',
    ],
    amenities: {
      'Room Highlights': [
        'Approximately 40 square meters',
        'Minimalist and elegant contemporary design with natural daylight',
        'King Size bed (1m80x2m)',
        'Cozy seating area',
        'Garden courtyard view',
        'Full access to resort facilities',
      ],
      'Bathroom & Wellness': [
        'Modern ensuite bathroom with rain shower',
        'Essential luxury and eco-friendly toiletries',
      ],
      'Living & Workspace': [
        'Dedicated work desk',
        'Safe',
      ],
      'Refreshments & Tech': [
        'Mini bar counter and fridge',
        'Complimentary espresso coffee capsule machine',
        'Filtered drinking water',
        'High speed Wifi',
      ],
    },
    is_featured: true,
    is_active: true,
    order: 2
  }
];

export const DEFAULT_DINING: DiningVenue = {
  id: 1,
  title: 'SERENITY RESTAURANT',
  subtitle: 'A Culinary Journey to International & Local',
  description: 'Embark on a refined gastronomic exploration where centuries-old Khmer recipes merge gracefully with contemporary international haute cuisine. Every dish is composed using freshly harvested produce from nearby fertile lands, artisanal organic herbs, and the freshest coastal seafood in an open-air tranquil atmosphere.',
  area: '45 sqm / 484 ft',
  capacity: '8 Tables / 16 Seats',
  food_type: 'Khmer & Western',
  drinks_type: 'Cocktail, Craft Beer, Fine Wine',
  meal_times: 'Breakfast, Lunch, Dinner',
  hero_image: '/storage/uploads/11-r.webp',
  gallery_images: [
    '/storage/uploads/10-r-1-1024x684.webp',
    '/storage/uploads/00-r.webp',
    '/storage/uploads/12-r.webp',
    '/storage/uploads/09-rr.webp',
  ],
  features: [
    'Farm-to-table organic produce sourced daily',
    'Intimate open-air pavilion surrounded by tropical gardens',
    'Curated wine pairings by our resident sommelier',
    'Custom degustation menus tailored to guest dietary desires'
  ]
};

export const DEFAULT_WELLNESS: WellnessItem[] = [
  {
    id: 1,
    title: 'Holistic Khmer Herbal Compress',
    subtitle: 'Deep Muscular Release & Herbal Rebalancing',
    description: 'A traditional Cambodian therapeutic ritual combining warm botanical poultices of lemongrass, plai, and kaffir lime with acupressure to dissolve stress and revitalize circulation.',
    duration: '90 Minutes',
    image: '/storage/uploads/DSC02794.jpg',
    category: 'Body Therapy',
    order: 1
  },
  {
    id: 2,
    title: 'Ocean & Mountain View Yoga',
    subtitle: 'Mindful Movement, Vinyasa & Breathwork',
    description: 'Greet the sunrise from our open-air wooden deck. Guided daily practices harmonizing body and mind through restorative flow, posture alignment, and deep conscious breathing.',
    duration: '60 Minutes',
    image: '/storage/uploads/DSC02740.jpg',
    category: 'Movement & Mind',
    order: 2
  },
  {
    id: 3,
    title: 'Botanical Radiance Facial',
    subtitle: 'Antioxidant-Rich Cellular Renewal',
    description: 'An indulgent facial therapy combining cold-pressed tropical botanical extracts, gentle lymphatic massage, and hydrating masks to restore healthy glow and elasticity.',
    duration: '60 Minutes',
    image: '/storage/uploads/DSC03023.jpg',
    category: 'Facial Rituals',
    order: 3
  },
  {
    id: 4,
    title: 'Tibetan Sound Bath Meditation',
    subtitle: 'Vibrational Frequency Healing',
    description: 'Immerse in sound frequencies from hand-hammered singing bowls. Resonating overtones release deep-seated tension and promote alpha-theta restorative mental states.',
    duration: '45 Minutes',
    image: '/storage/uploads/DSC02698.jpg',
    category: 'Sound & Meditation',
    order: 4
  }
];

export const DEFAULT_ACTIVITIES: Activity[] = [
  {
    id: 1,
    title: 'Bokor National Park Rainforest Trek',
    subtitle: 'Pristine Wilderness & Cloud Forest Exploration',
    description: 'A private guided nature hike through protected mountain rainforests, encountering indigenous biodiversity, hidden forest waterfalls, and breathtaking coastal cliff vistas.',
    image: '/storage/uploads/SD-00.webp',
    category: 'Nature & Excursions',
    order: 1
  },
  {
    id: 2,
    title: 'Sunset Infinity Pool Leisure',
    subtitle: 'Golden Hour Cocktails & Floating Lounges',
    description: 'Unwind at the heart of the retreat as the late afternoon sun illuminates the tiered azure waters, with chilled organic botanical cocktails served directly to your lounger.',
    image: '/storage/uploads/Pool-exterior-02.webp',
    category: 'Resort Leisure',
    order: 2
  },
  {
    id: 3,
    title: 'Khmer Gastronomy Cooking Masterclass',
    subtitle: 'Heirloom Spice Farms & Culinary Workshop',
    description: 'Accompany our head chef to local spice plantations to gather fresh Kampot pepper and organic herbs, followed by hands-on mastery of Cambodia’s iconic amok and delicate dishes.',
    image: '/storage/uploads/12-r.webp',
    category: 'Culinary Experiences',
    order: 3
  },
  {
    id: 4,
    title: 'Private Starlit Pavilion Dining',
    subtitle: 'Secluded Candlelit Romantic Multi-Course Dinner',
    description: 'An unforgettable candlelit culinary journey set in an exclusive secluded terrace pavilion beneath the starlit sky, curated by our executive chef.',
    image: '/storage/uploads/11-r.webp',
    category: 'Exclusive Dining',
    order: 4
  }
];

export const DEFAULT_GALLERY: GalleryItem[] = [
  { id: 1, title: 'Tiered Azure Infinity Pools', category: 'pool', image_url: '/storage/uploads/Pool-exterior-04-1.webp', order: 1 },
  { id: 2, title: 'Poolside Daybed Serenity', category: 'pool', image_url: '/storage/uploads/Pool-exterior-02.webp', order: 2 },
  { id: 3, title: 'Pool Suite Interior Master Bedroom', category: 'pool', image_url: '/storage/uploads/Pool-interior-01.webp', order: 3 },
  { id: 4, title: 'Suite Living Sanctuary', category: 'pool', image_url: '/storage/uploads/Pool-interior-02.webp', order: 4 },
  { id: 5, title: 'Evening Illumination by the Water', category: 'pool', image_url: '/storage/uploads/Pool-interior-03.webp', order: 5 },
  { id: 6, title: 'Mountain View Sanctuary Bed', category: 'mountain', image_url: '/storage/uploads/Mount-View-In02-2.webp', order: 6 },
  { id: 7, title: 'Panoramic Mountain Balcony', category: 'mountain', image_url: '/storage/uploads/Mount-View-In02-3.webp', order: 7 },
  { id: 8, title: 'Natural Teak & Warm Earthy Accents', category: 'mountain', image_url: '/storage/uploads/Mount-View-In06-1.webp', order: 8 },
  { id: 9, title: 'Mountain Suite Exterior Villa', category: 'mountain', image_url: '/storage/uploads/Mount-View-ex01.jpg', order: 9 },
  { id: 10, title: 'Serenity Restaurant Terrace', category: 'dining', image_url: '/storage/uploads/11-r.webp', order: 10 },
  { id: 11, title: 'Intimate Dining Table Setting', category: 'dining', image_url: '/storage/uploads/10-r-1-1024x684.webp', order: 11 },
  { id: 12, title: 'Gourmet Khmer Amok Presentation', category: 'dining', image_url: '/storage/uploads/12-r.webp', order: 12 },
  { id: 13, title: 'Morning Yoga Pavilion', category: 'wellness', image_url: '/storage/uploads/DSC02740.jpg', order: 13 },
  { id: 14, title: 'Holistic Herbal Compress Ritual', category: 'wellness', image_url: '/storage/uploads/DSC02794.jpg', order: 14 },
  { id: 15, title: 'Singing Bowl Sound Therapy', category: 'wellness', image_url: '/storage/uploads/DSC02698.jpg', order: 15 },
  { id: 16, title: 'Evening Dusk at the Retreat Grounds', category: 'grounds', image_url: '/storage/uploads/SD-11.webp', order: 16 },
  { id: 17, title: 'Colonial Architecture Details', category: 'grounds', image_url: '/storage/uploads/SD-10.jpg', order: 17 },
  { id: 18, title: 'Tropical Pathways & Lush Flora', category: 'grounds', image_url: '/storage/uploads/SD-12.webp', order: 18 },
];
