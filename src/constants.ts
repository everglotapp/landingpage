export const APP_BASE_URL = "https://app.everglot.com" as const
export const LINK_TO_CTA = "/#join" as const

export const SUPPORTED_LOCALES = ["en", "de", "zh"] as const
export type SupportedLocale = typeof SUPPORTED_LOCALES[number]
