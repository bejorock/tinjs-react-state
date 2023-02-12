"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const storage_browser_1 = __importDefault(require("./storage/storage.browser"));
// const storageService: StorageService = new BrowserStorageService();
class ReactServices {
    constructor() {
        this.storageService = new storage_browser_1.default();
    }
    setStorageService(storageService) {
        this.storageService = storageService;
    }
    getStorageService() {
        return this.storageService;
    }
}
exports.default = new ReactServices();
