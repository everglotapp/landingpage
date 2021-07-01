import { writable } from "svelte/store"

export const inviteToken = writable<string | null>(null)
