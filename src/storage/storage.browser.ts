import StorageService from "./storage";

export default class BrowserStorageService implements StorageService {
  getItem(key: string): string | null {
    if (!globalThis.window) return null;

    return window.localStorage.getItem(key);
  }

  setItem(key: string, value: string) {
    if (!globalThis.window) return;

    window.localStorage.setItem(key, value);
  }

  removeItem(key: string): void {
    if (!globalThis.window) return;

    window.localStorage.removeItem(key);
  }

  clear(): void {
    if (!globalThis.window) return;

    window.localStorage.clear();
  }
}
