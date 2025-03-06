import { writable, type Writable } from "svelte/store"

export const KEY_PREFIX = "om-checklist"

type LocalStorageStore<T> = Writable<T> & {
    reset: () => void
}

export function localStorageStore<T>(
    key1: string,
    initialValue: T
): LocalStorageStore<T> {
    const isBrowser = typeof window !== "undefined"

    const key = `${KEY_PREFIX}-${key1}`

    const storedValue = isBrowser ? localStorage.getItem(key) : null
    const initial = storedValue ? (JSON.parse(storedValue) as T) : initialValue

    const store = writable<T>(initial, (set) => {
        if (!isBrowser) return

        const handleStorage = (event: StorageEvent) => {
            if (event.key === key) {
                const newValue = event.newValue
                    ? (JSON.parse(event.newValue) as T)
                    : initialValue
                set(newValue)
            }
        }

        window.addEventListener("storage", handleStorage)
        return () => window.removeEventListener("storage", handleStorage)
    })

    if (isBrowser) {
        store.subscribe((value) => {
            try {
                localStorage.setItem(key, JSON.stringify(value))
            } catch (error) {
                console.error("LocalStorage error:", error)
            }
        })
    }

    return {
        ...store,
        reset: () => store.set(initialValue),
    }
}
