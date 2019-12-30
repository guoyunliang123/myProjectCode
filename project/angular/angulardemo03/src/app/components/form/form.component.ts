import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  public peopleInfo: any = {
    username: "",
    sex: "2",
    cityList: ["北京", "上海", "深圳"],
    city: "北京",
    hobby: [
      {
        title: "足球",
        checked: false
      },
      {
        title: "篮球",
        checked: false
      },
      {
        title: "排球",
        checked: true
      },
      {
        title: "code",
        checked: false
      }
    ],
    mark: ""
  };

  constructor() {}

  ngOnInit() {}

  doSubmit() {
    // jQuery dom 操作
    // const usernameDom: any = document.getElementById("username");
    // console.log(usernameDom.value);

    console.log(this.peopleInfo);
  }
}
