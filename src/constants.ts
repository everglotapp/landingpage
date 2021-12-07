export const APP_BASE_URL = "https://app.everglot.com" as const
export const LINK_TO_CTA = "/#join" as const

export const SUPPORTED_LOCALES = ["en", "de", "zh"] as const
export type SupportedLocale = typeof SUPPORTED_LOCALES[number]

export const TRACKER_BASE_URL = "//internal-analytics.everglot.com/"
export const TRACKER_URL = TRACKER_BASE_URL + "matomo.php"
export const SITE_ID = "1"
