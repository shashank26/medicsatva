import { Component, OnInit } from "@angular/core";
import {
  headerAnimation,
  expandAnimation,
  expandAnimationRight
} from "../common/animations";
import { ProductService } from "../Services/products.service";
import { Country } from "../models/Country";
import { Query } from "../models/Query";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
  animations: [headerAnimation, expandAnimation, expandAnimationRight]
})
export class ContactUsComponent implements OnInit {
  private phoneCodes: any;
  private countries: Country[];
  private query: Query;
  private hide: boolean = true;
  private querySentSuccessfully: number = 0;
  constructor(private service: ProductService) {
    this.query = new Query();
    this.query.country = new Country();
  }

  ngOnInit() {}

  getCountriesLike(event: any) {
    const text = event.currentTarget.value;
    this.service.getCountriesLike(text).subscribe(countries => {
      this.countries = countries;
      this.hide = false;
    });
  }

  selectedCountry(data: Country) {
    this.query.country.name = data.name;
    this.query.country.code = data.code;
    this.hide = true;
    this.setPhoneCode(data.code);
  }

  setPhoneCode(code: string) {
    if (this.phoneCodes) {
      this.query.phoneNumber = this.phoneCodes[code] + " ";
    } else {
      this.service.getPhoneCode(code).subscribe(phoneCodes => {
        this.phoneCodes = phoneCodes;
        this.query.phoneNumber = this.phoneCodes[code] + " ";
      });
    }
  }

  sendData() {
    this.querySentSuccessfully = 2;
    this.service.setQuery(this.query).subscribe(isSent => {
      this.querySentSuccessfully = isSent ? 1 : 3;
    });
  }

  hideSuggest(e: any) {
    this.hide = e.keyCode == 27;
  }
}
