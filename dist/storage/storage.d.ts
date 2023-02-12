export default interface StorageService {
    getItem(key: string): string | null;
    setItem(key: string, value: string): string;
    removeItem(key: string): void;
    clear(): void;
}
//# sourceMappingURL=storage.d.ts.map