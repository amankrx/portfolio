import { EventParams, PageviewParams } from '@/types/gtag';

export const GA_MEASUREMENT_ID = 'G-FGDYH5SZJW';

export function pageview(params: PageviewParams): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('config', GA_MEASUREMENT_ID, params);
  }
}

export function event(action: string, params: EventParams): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  }
}
