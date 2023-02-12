import StorageService from "./storage/storage";
import BrowserStorageService from "./storage/storage.browser";

// const storageService: StorageService = new BrowserStorageService();

class ReactServices {
  private storageService: StorageService = new BrowserStorageService();

  setStorageService(storageService: StorageService) {
    this.storageService = storageService;
  }

  getStorageService() {
    return this.storageService;
  }
}

export default new ReactServices();
