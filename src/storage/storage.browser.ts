import StorageService from "./storage";

export default class BrowserStorageService implements StorageService {
  getItem(key: string): string | null {
    throw new Error("Method not implemented.");
  }
  setItem(key: string, value: string): string {
    throw new Error("Method not implemented.");
  }
  removeItem(key: string): void {
    throw new Error("Method not implemented.");
  }
  clear(): void {
    throw new Error("Method not implemented.");
  }
}
