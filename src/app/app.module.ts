import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { InitViewComponent } from "./init-view/init-view.component";
import { AppRoutingModule } from "./app.routing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavigationComponent } from "./navigation/navigation.component";
import { ProductsComponent } from "./products/products.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { SliderComponent } from "./slider/slider.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "src/environments/environment";
import { ProductService } from "./Services/products.service";
import { SlideComponent } from "./slider/slide/slide.component";

import { FooterComponent } from "./footer/footer.component";
import { SuggestBoxComponent } from "./common/suggest-box/suggest-box.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ProductsViewComponent } from './products/products-view/products-view.component';
import { ProductViewComponent } from './products/products-view/product-view/product-view.component';
import { CategoriesViewComponent } from './products/categories-view/categories-view.component';
import { LoaderComponent } from './products/loader/loader.component';
import { TileViewComponent } from "./products/categories-view/tile-view/tile-view.component";
import { TestimonialsComponent } from './slider/testimonials/testimonials.component';
import { ScienceDailyFeedsComponent } from './slider/science-daily-feeds/science-daily-feeds.component';

@NgModule({
  declarations: [
    AppComponent,
    InitViewComponent,
    NavigationComponent,
    ProductsComponent,
    AboutUsComponent,
    ContactUsComponent,
    SliderComponent,
    SlideComponent,
    TileViewComponent,
    FooterComponent,
    SuggestBoxComponent,
    ProductsViewComponent,
    ProductViewComponent,
    CategoriesViewComponent,
    LoaderComponent,
    TestimonialsComponent,
    ScienceDailyFeedsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
