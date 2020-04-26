import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Country } from "src/app/models/Country";

@Component({
  selector: "app-suggest-box",
  templateUrl: "./suggest-box.component.html",
  styleUrls: ["./suggest-box.component.scss"]
})
export class SuggestBoxComponent implements OnInit {
  @Input()
  countries: Country[];
  @Output()
  selectedCountry = new EventEmitter<Country>();
  constructor() {}

  ngOnInit() {}

  selectCountry(country: Country) {
    this.selectedCountry.emit(country);
  }
}
