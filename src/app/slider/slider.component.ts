import { Component, OnInit } from "@angular/core";
import { ProductService } from "../Services/products.service";
import { Slide } from "../models/slide";
import { Testimonial } from "../models/Testmonial";
import { ScienceDailyFeed } from "../models/ScienceDailyFeed";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"]
})
export class SliderComponent implements OnInit {
  private testimonial: Testimonial;
  private testimonials: Testimonial[];
  private scienceDailyFeed: ScienceDailyFeed;
  private scienceDailyFeeds: ScienceDailyFeed[];
  private navigation: string[] = [
    "mini-intro",
    "testimonials",
    "events",
    "foot"
  ];
  private navigationPointer = 0;
  private scrolling: boolean = false;
  private hide: boolean = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getTestimonials().subscribe(testimonials => {
      this.testimonials = testimonials;
      this.initiateTestimonialSlides();
      this.testimonial = this.testimonials[0];
    });
    this.productService.getScienceDailyFeed().subscribe(scienceDailyFeeds => {
      this.scienceDailyFeeds = scienceDailyFeeds;
      this.initiateScienceDailyFeedsScroll();
    });

    window.onwheel = event => {
      this.scrolling ? null : this.scrollNavigation(event);
    };
  }

  private initiateScienceDailyFeedsScroll() {
    const parElement = document.querySelector(
      ".events .box-right"
    ) as HTMLDivElement;
    const scrollElement = document.querySelector(
      ".events .scienceFeedDaily-content"
    ) as HTMLDivElement;

    console.log(scrollElement.clientHeight);

    scrollElement.style.transition = "all 0.3s linear";
    let scrollPos = 0,
      scrollOffset = 10;
    setInterval(() => {
      const maxTop = scrollElement.clientHeight - parElement.clientHeight;
      scrollPos -= scrollOffset;
      if (scrollPos <= -maxTop) {
        scrollPos = 0;
        scrollElement.style.opacity = "0";
      } else {
        scrollElement.style.opacity = "1";
      }
      scrollElement.style.transform = `translateY(${scrollPos}px)`;
    }, 300);

    parElement.onmouseover = () => {
      scrollOffset = 0;
    };

    parElement.onmouseout = () => {
      scrollOffset = 10;
    };
  }

  private initiateTestimonialSlides() {
    let counter = 0,
      max = this.testimonials.length - 1;
    setInterval(() => {
      this.testimonial = null;
      setTimeout(() => {
        this.testimonial = this.testimonials[
          (counter = ++counter > max ? 0 : counter)
        ];
      }, 1000);
    }, 4000);
  }

  private navigateTo(id) {
    this.navigationPointer = this.navigation.indexOf(id);

    if (this.navigation[this.navigationPointer] != "testimonials") {
      this.hide = true;
    } else {
      this.hide = false;
    }

    const ele = document.getElementById(id) as HTMLDivElement;
    const scrollEle = document.getElementById("intro") as HTMLDivElement;
    scrollEle.style.transform = `translateY(-${ele.offsetTop}px)`;
  }

  private scrollNavigation(event) {
    this.scrolling = true;
    if (event.deltaY > 0) {
      if (this.navigationPointer < this.navigation.length - 1) {
        this.navigateTo(this.navigation[++this.navigationPointer]);
      }
    } else {
      if (this.navigationPointer > 0) {
        this.navigateTo(this.navigation[--this.navigationPointer]);
      }
    }
    setTimeout(() => {
      this.scrolling = false;
    }, 1000);
  }
}
