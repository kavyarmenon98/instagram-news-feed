import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ContentPageComponent } from './content-page/content-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import {LazyLoadImageModule} from 'ng-lazyload-image'
import {CommonModule} from '@angular/common'
@NgModule({
  declarations: [
    HomePageComponent,
    ContentPageComponent
  ],
  imports: [
    MatIconModule,
    LazyLoadImageModule,
    CommonModule
  ]
})
export class NewsFeedModule { }
