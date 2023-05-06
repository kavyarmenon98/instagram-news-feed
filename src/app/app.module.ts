import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
// import { ContentPageComponent } from './news-feed/content-page/content-page.component';
// import { HomePageComponent } from './news-feed/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import {LazyLoadImageModule} from 'ng-lazyload-image'
import { NewsFeedModule } from './news-feed/news-feed.module';
@NgModule({
  declarations: [
    AppComponent,
    // HomePageComponent,
    // ContentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    LazyLoadImageModule,
    NewsFeedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
