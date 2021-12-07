interface Window {
    _paq?: any[][]
    Matomo?: Matomo
}

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
