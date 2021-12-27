export const GA_TRACKING_ID = process.env.NODE_ENV === 'production' ? 'G-QNMM2GSDYJ' : ''

declare global {
  interface Window {
    gtag: (option: string, gaTrackingId: string, options: Record<string, unknown>) => void
  }
}

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }: Record<string, string>) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
