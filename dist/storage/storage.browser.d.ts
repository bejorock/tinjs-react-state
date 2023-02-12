import StorageService from "./storage";
export default class BrowserStorageService implements StorageService {
    getItem(key: string): string | null;
    setItem(key: string, value: string): string;
    removeItem(key: string): void;
    clear(): void;
}
//# sourceMappingURL=storage.browser.d.ts.map