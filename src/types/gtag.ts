// src/types/gtag.ts
export interface GTagEvent {
  action: string;
  category: string;
  label: string;
  value?: number;
}

export interface PageviewParams {
  page_path: string;
  page_title?: string;
  page_location?: string;
}

export interface EventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: string | number | undefined;
}

type GTagCommand = 'config' | 'event' | 'js' | 'set';

type GTagFunction = (
  command: GTagCommand,
  targetId: string | Date,
  params?: PageviewParams | EventParams
) => void;

declare global {
  interface Window {
    gtag: GTagFunction;
    dataLayer: Array<{
      [key: string]: string | Date | PageviewParams | EventParams;
    }>;
  }
}
