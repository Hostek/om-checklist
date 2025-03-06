import { writable } from 'svelte/store';

export function localStorageStore<T>(key: string, initialValue: T) {
	// Check if we're in the browser environment
	const isBrowser = typeof window !== 'undefined';

	// Get stored value or use initial value
	const storedValue = isBrowser ? localStorage.getItem(key) : null;
	const initial = storedValue ? JSON.parse(storedValue) : initialValue;

	// Create the store
	const store = writable(initial, (set) => {
		if (isBrowser) {
			// Update store when localStorage changes from other tabs
			const handleStorage = (event: StorageEvent) => {
				if (event.key === key) {
					set(event.newValue ? JSON.parse(event.newValue) : initialValue);
				}
			};

			window.addEventListener('storage', handleStorage);
			return () => window.removeEventListener('storage', handleStorage);
		}
	});

	// Subscribe to store changes and save to localStorage
	if (isBrowser) {
		store.subscribe((value) => {
			try {
				localStorage.setItem(key, JSON.stringify(value));
			} catch (error) {
				console.error('Error saving to localStorage:', error);
			}
		});
	}

	return {
		subscribe: store.subscribe,
		set: store.set,
		update: store.update,
		// Optional: Add a reset method
		reset: () => store.set(initialValue)
	};
}
