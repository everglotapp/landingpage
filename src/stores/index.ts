import { derived, writable } from "svelte/store"
import { APP_BASE_URL } from "../constants"

export const inviteToken = writable<string | null>(null)
export const linkToCta = derived([inviteToken], ([$inviteToken]) =>
    $inviteToken === null ? `/#join` : `/?token=${$inviteToken}#join`
)
export const linkToLogin = derived([inviteToken], ([$inviteToken]) =>
    $inviteToken === null
        ? `${APP_BASE_URL}/login`
        : `${APP_BASE_URL}/login?token=${$inviteToken}`
)
export const ctaLink = derived(
    [inviteToken, linkToCta],
    ([$inviteToken, $linkToCta]) =>
        $inviteToken === null
            ? $linkToCta
            : `${APP_BASE_URL}/join?token=${$inviteToken}`
)
