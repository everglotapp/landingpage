import { get } from "svelte/store"
import { SITE_ID, TRACKER_URL } from "../../constants"
import { matomoStore } from "../../stores"

function getTracker(): MatomoTracker | null {
    const matomo = get(matomoStore)
    if (!matomo) {
        return null
    }
    return matomo.getTracker(TRACKER_URL, SITE_ID)
}

export function trackPageView() {
    const tracker = getTracker()
    if (!tracker) {
        return
    }
    tracker.trackPageView()
}

type EventCategory = "Newsletter"

type EventAction<T extends EventCategory> = T extends "Newsletter"
    ? "ConsentGranted" | "ConsentRevoked" | "Subscribe"
    : never

export function trackEvent<T extends EventCategory>(
    category: T,
    action: EventAction<T>,
    name?: string,
    value?: string
) {
    const tracker = getTracker()
    if (!tracker) {
        return
    }
    tracker.trackEvent(category, action, name, value)
}
