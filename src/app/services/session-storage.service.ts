import { Injectable } from '@angular/core';

@Injectable()
export class SessionStorageService {
  constructor() {}

  get(key: string, isArray: boolean = true) {
    const storeData = sessionStorage.getItem(key);
    let storeObject = JSON.parse(storeData);
    if (!storeObject) {
      storeObject = isArray ? [] : undefined;
    }

    return storeObject;
  }

  set(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  clear(key: string) {
    sessionStorage.removeItem(key);
  }

  clearAll() {
    sessionStorage.clear();
  }
}
