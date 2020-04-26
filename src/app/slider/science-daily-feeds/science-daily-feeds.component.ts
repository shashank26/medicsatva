import { Component, OnInit, Input } from "@angular/core";
import { ScienceDailyFeed } from "src/app/models/ScienceDailyFeed";
import { scienceDailyFeedsAnimations } from "./science-daily-feeds.animation";

@Component({
  selector: "app-science-daily-feeds",
  templateUrl: "./science-daily-feeds.component.html",
  styleUrls: ["./science-daily-feeds.component.scss"],
  animations: [scienceDailyFeedsAnimations]
})
export class ScienceDailyFeedsComponent implements OnInit {
  @Input() scienceDailyFeed: ScienceDailyFeed;

  constructor() {}

  ngOnInit() {}
}
