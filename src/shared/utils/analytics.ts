type GtagFunction = (command: string, action: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    gtag?: GtagFunction;
  }
}

export const trackEvent = (category: string, action: string, label?: string) => {
  console.log(`[Analytics] ${category} - ${action} ${label ? `(${label})` : ''}`);
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
};

export const trackDownload = (source: string) => {
  trackEvent('Conversion', 'Download Click', source);
};
