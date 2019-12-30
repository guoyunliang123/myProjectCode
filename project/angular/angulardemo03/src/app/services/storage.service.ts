import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  constructor() {}

  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string) {
    // console.log("我是一个公共方法");

    return JSON.parse(localStorage.getItem(key));
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
