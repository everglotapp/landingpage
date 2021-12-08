interface Window {
    _paq?: any[][]
    Matomo?: Matomo
}

type EventCategory = "Newsletter" | "MainNav" | "Hero"

type CATEGORY_ACTIONS = {
    Newsletter: "CheckConsent" | "UncheckConsent" | "ClickSubscribe"
    MainNav: "ClickJoin" | "ClickLogin"
    Hero: "ClickJoin" | "ClickLogin"
}

type EventAction<T extends EventCategory> = T extends keyof CATEGORY_ACTIONS
    ? CATEGORY_ACTIONS[T]
    : never

interface MatomoTracker {
    // Log a page view
    trackPageView(customTitle?: string): void
    // Log an event with an event category (Videos, Music, Games...), an event action (Play, Pause, Duration, Add Playlist, Downloaded, Clicked...), and an optional event name and optional numeric value.
    trackEvent(
        category: string,
        action: string,
        name?: string,
        value?: string
    ): void
}

interface Matomo {
    getTracker(trackerUrl: string, siteId: string): MatomoTracker
}
