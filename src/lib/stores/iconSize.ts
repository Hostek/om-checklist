import { writable } from "svelte/store"

export const iconSize = writable<string>("max(3vw, 3vh)")
