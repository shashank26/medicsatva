import { Injectable } from "@angular/core";
import { Slide } from "../models/slide";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Observable, of, Observer } from "rxjs";
import { Products } from "../models/Products";
import { Country } from "../models/Country";
import { Query } from "../models/Query";
import { HttpClient, HttpHeaders } from "@angular/common/http";
//import * as googleApi from "googleapis";
//import * as mailjet from "mailjet";
import { environment } from "src/environments/environment";
import { Testimonial } from "../models/Testmonial";
import { NgxXml2jsonService } from "ngx-xml2json";
import { ScienceDailyFeed } from "../models/ScienceDailyFeed";

@Injectable()
export class ProductService {
  products: Observable<Products[]>;
  countries: Observable<Country[]>;
  scienceDailyFeeds: Observable<ScienceDailyFeed[]>;

  constructor(
    private db: AngularFireDatabase,
    private http: HttpClient,
    private ngxXml2jsonService: NgxXml2jsonService
  ) {
    this.getScienceDailyFeed();
  }

  getSlides(): Observable<Slide[]> {
    return this.db.list("/0/slides").valueChanges() as Observable<Slide[]>;
  }

  getProducts(): Observable<Products[]> {
    if (!this.products) {
      this.products = this.db.list("/2/products").valueChanges() as Observable<
        Products[]
      >;
    }
    return this.products;
  }

  getCountriesLike(text: string): Observable<Country[]> {
    if (!this.countries) {
      this.countries = this.db
        .list("/1/countries")
        .valueChanges() as Observable<Country[]>;
    }
    return this.filterCountries(text);
  }

  getPhoneCode(code: string): Observable<any> {
    return this.db.object("/5/phoneCodes").valueChanges() as Observable<any>;
  }

  getTestimonials(): Observable<Testimonial[]> {
    return this.db.list("/3/testimonials").valueChanges() as Observable<
      Testimonial[]
    >;
  }

  getScienceDailyFeed() {
    return new Observable<ScienceDailyFeed[]>(
      (observer: Observer<ScienceDailyFeed[]>) => {
        this.http
          .get(environment.scienceDailyFeed, { responseType: "text" })
          .subscribe(
            data => {
              const parser = new DOMParser();
              const xml = parser.parseFromString(data, "text/xml");
              const obj = this.ngxXml2jsonService.xmlToJson(xml) as any;
              let feedJson = obj.rss.channel.item as Array<any>;
              const feeds = new Array<ScienceDailyFeed>();
              feedJson.map(x => {
                feeds.push(
                  new ScienceDailyFeed(
                    x.title,
                    x.description["#text"],
                    new Date(x.pubDate),
                    x.link
                  )
                );
              });
              observer.next(feeds.slice(0, 10));
              observer.complete();
            },
            error => {
              observer.error(error);
              observer.complete();
            }
          );
      }
    );
  }

  setQuery(query: Query): Observable<boolean> {
    return Observable.create((observer: Observer<boolean>) => {
      this.db.database.ref("4/queries/").push(query, error => {
        if (error) observer.next(false);
        else {
          observer.next(true);
        }
        observer.complete();
      });
    });
  }

  private sendMail() {
    /*let json = {
      Messages: [
        {
          From: {
            Email: "shashank.sharma@fid.com",
            Name: "Shashank Sharma"
          },
          To: [
            {
              Email: "shashanky.2692@gmail.com",
              Name: "Shashank Sharma"
            }
          ],
          Subject: "My first Mailjet Email!",
          TextPart: "Greetings from Mailjet."
        }
      ]
    };

    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Basic ${btoa(
        environment.mailJet.clientId + ":" + environment.mailJet.clientSecret
      )}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE",
      "Access-Control-Allow-Headers": "Origin, Authorization, Content-Type"
    });
    console.log(JSON.stringify(json));
    console.log(httpHeaders.get("Authorization"));

    this.http
      .post("https://api.mailjet.com/v3.1/send", JSON.stringify(json), {
        headers: httpHeaders
      })
      .subscribe(
        x => {
          console.log(x);
        },
        error => {
          console.log(error);
        }
      );*/
  }

  private filterCountries(text: string): Observable<Country[]> {
    return Observable.create((observer: Observer<Country[]>) => {
      let filteredCountries = [];
      this.countries.subscribe(
        countries => {
          filteredCountries = countries.filter(country =>
            country.name.toLowerCase().startsWith(text.toLowerCase())
          );
          observer.next(filteredCountries);
          observer.complete();
        },
        err => observer.error(err)
      );
    });
  }

  private initializeMailClient() {
    //var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  }
}
