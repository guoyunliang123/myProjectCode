/* 服务的使用
1、ng g service services/storag
2、app.module.ts 里面引入创建的服务  并且声明

import { StorageService } from "./services/storage.service";  引入

providers: [StorageService]    声明

3、在用到的组件里面引入服务
import { StorageService } from "../../services/storage.service";  注意文件路径


  初始化：
  constructor(public storage: StorageService) {
    const s = this.storage.get();
    console.log(s);
  }

*/

import { Component, OnInit } from "@angular/core";

// 引入服务
import { StorageService } from "../../services/storage.service";

// 不推荐这么使用
// const storage = new StorageService();
// console.log(storage);

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  public keywords: string;

  public historyList: any[] = [];

  constructor(public storage: StorageService) {
    // const s = this.storage.get();
    // console.log(s);
  }

  ngOnInit() {
    console.log("页面刷新会触发这个声明周期函数");

    const searchList: any = this.storage.get("searchList");
    if (searchList) {
      this.historyList = searchList;
    }
  }

  doSearch() {
    if (this.historyList.indexOf(this.keywords) == -1) {
      this.historyList.push(this.keywords);

      this.storage.set("searchList", this.historyList);
    }

    this.keywords = "";
  }

  deleteHistory(key) {
    this.historyList.splice(key, 1);
    this.storage.set("searchList", this.historyList);
    console.log(key);
  }
}
