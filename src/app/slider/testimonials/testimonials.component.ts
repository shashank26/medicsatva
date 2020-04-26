import { Component, OnInit, Input } from "@angular/core";
import { Testimonial } from "src/app/models/Testmonial";
import { testimonialsAnimations } from "./testimonials.animation";

@Component({
  selector: "app-testimonials",
  templateUrl: "./testimonials.component.html",
  styleUrls: ["./testimonials.component.scss"],
  animations: [testimonialsAnimations]
})
export class TestimonialsComponent implements OnInit {
  @Input() testimonial: Testimonial;

  constructor() {}

  ngOnInit() {}
}
