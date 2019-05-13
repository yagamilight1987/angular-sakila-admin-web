import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  constructor() {}

  get(key: string, isArray: boolean = true) {
    const storeData = localStorage.getItem(key);
    let storeObject = JSON.parse(storeData);
    if (!storeObject) {
      storeObject = isArray ? [] : undefined;
    }
    return storeObject;
  }

  set(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  clear(key: string) {
    return localStorage.removeItem(key);
  }

  clearAll() {
    return localStorage.clear();
  }
}
