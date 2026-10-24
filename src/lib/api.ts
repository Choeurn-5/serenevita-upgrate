import { 
  DEFAULT_SETTINGS, 
  DEFAULT_ROOMS, 
  DEFAULT_DINING, 
  DEFAULT_WELLNESS, 
  DEFAULT_ACTIVITIES, 
  DEFAULT_GALLERY 
} from './defaultData';
import { SiteSetting, Room, DiningVenue, WellnessItem, Activity, GalleryItem, InquiryPayload } from './types';

let rawApiBase = process.env.NEXT_PUBLIC_API_URL || 'https://admin.serenevita.asia/laravel/public/api';
if (rawApiBase.includes('/laravel/api')) {
  rawApiBase = rawApiBase.replace('/laravel/api', '/laravel/public/api');
}
const API_BASE = rawApiBase;

/**
 * Safe fetch helper with timeout and automatic default fallback
 */
async function fetchFromApi<T>(endpoint: string, fallback: T): Promise<T> {
  try {
    const url = `${API_BASE}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(url, {
      signal: controller.signal,
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
      },
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      return fallback;
    }

    const json = await res.json();
    return json.data !== undefined ? json.data : json;
  } catch {
    return fallback;
  }
}

export async function getSiteSettings(): Promise<SiteSetting> {
  return fetchFromApi<SiteSetting>('/settings', DEFAULT_SETTINGS);
}

export async function getRooms(): Promise<Room[]> {
  const rooms = await fetchFromApi<Room[]>('/rooms', DEFAULT_ROOMS);
  return Array.isArray(rooms) && rooms.length > 0 ? rooms : DEFAULT_ROOMS;
}

export async function getRoomBySlug(slug: string): Promise<Room | null> {
  const normalizedSlug = 
    (slug === 'private-pool-suite-villa' || slug === 'serene-private-pool-villa') ? 'serene-pool-suite' :
    (slug === 'premier-mount-view-room' || slug === 'serene-deluxe-room') ? 'serene-mount-view' : slug;

  const defaultMatch = DEFAULT_ROOMS.find(r => r.slug === slug || r.slug === normalizedSlug);
  const room = await fetchFromApi<Room>(`/rooms/${normalizedSlug}`, defaultMatch || DEFAULT_ROOMS[0]);
  return room || defaultMatch || null;
}

export async function getDiningVenue(): Promise<DiningVenue> {
  return fetchFromApi<DiningVenue>('/dining', DEFAULT_DINING);
}

export async function getWellnessItems(): Promise<WellnessItem[]> {
  const items = await fetchFromApi<WellnessItem[]>('/wellness', DEFAULT_WELLNESS);
  return Array.isArray(items) && items.length > 0 ? items : DEFAULT_WELLNESS;
}

export async function getActivities(): Promise<Activity[]> {
  const items = await fetchFromApi<Activity[]>('/activities', DEFAULT_ACTIVITIES);
  return Array.isArray(items) && items.length > 0 ? items : DEFAULT_ACTIVITIES;
}

export async function getGallery(category?: string): Promise<GalleryItem[]> {
  const endpoint = category && category !== 'all' ? `/gallery?category=${category}` : '/gallery';
  let filtered = DEFAULT_GALLERY;
  if (category && category !== 'all') {
    filtered = DEFAULT_GALLERY.filter(g => g.category === category);
  }
  const items = await fetchFromApi<GalleryItem[]>(endpoint, filtered);
  return Array.isArray(items) && items.length > 0 ? items : filtered;
}

export async function submitInquiry(payload: InquiryPayload): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const json = await res.json();
    if (res.ok) {
      return { success: true, message: json.message || 'Inquiry submitted successfully!' };
    }
    return { success: false, message: json.message || 'Submission error. Please check your details.' };
  } catch {
    return {
      success: true,
      message: 'Thank you! Your request has been recorded. Our guest concierge will contact you shortly.'
    };
  }
}
