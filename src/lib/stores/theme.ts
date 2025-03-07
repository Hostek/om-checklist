import { localStorageStore } from "$lib/localStorage"
import type { Theme } from "../../types"

export const theme = localStorageStore<Theme>("theme", "dark")
