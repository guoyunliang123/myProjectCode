import { Component, OnInit } from "@angular/core";

import { StorageService } from "../../services/storage.service";

@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.scss"]
})
export class TodolistComponent implements OnInit {
  public keyword: string;

  public todolist: any[] = [];

  constructor(public storage: StorageService) {
    // console.log(this.storage.get());
  }

  ngOnInit() {
    const todoList: any = this.storage.get("todoList");
    if (todoList) {
      this.todolist = todoList;
    }
  }

  doAdd(e) {
    if (e.keyCode == 13) {
      if (!this.todolistHaskeyword(this.todolist, this.keyword)) {
        this.todolist.push({
          title: this.keyword,
          status: 0
        });
        this.keyword = "";

        this.storage.set("todoList", this.todolist);
      } else {
        alert("数据已经存在");
        this.keyword = "";
      }
    }
  }

  deleteDate(key) {
    this.todolist.splice(key, 1);

    this.storage.set("todoList", this.todolist);
  }

  // 如果数组里面有 keyword 返回 true，否则返回 false
  todolistHaskeyword(todolist: any, keyword: any) {
    if (!keyword) {
      return false;
    }
    for (let i = 0; i < todolist.length; i++) {
      if (todolist[i].title == keyword) {
        return true;
      }
    }
    return false;
  }

  checkboxChange() {
    this.storage.set("todoList", this.todolist);
  }
}
