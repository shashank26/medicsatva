import { Component, OnInit, Input } from "@angular/core";
import { Slide } from "src/app/models/slide";
import { slideAnimations } from "./slide.animation";

@Component({
  selector: "app-slide",
  templateUrl: "./slide.component.html",
  styleUrls: ["./slide.component.scss"],
  animations: [slideAnimations]
})
export class SlideComponent implements OnInit {
  @Input("slideInfo") slide: Slide;

  constructor() {}

  ngOnInit() {
    
  }
}
