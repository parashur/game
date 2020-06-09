import { Component, VERSION, OnInit, HostListener } from "@angular/core";
import { Attribute } from "@angular/compiler";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  constructor() {
  }
}
