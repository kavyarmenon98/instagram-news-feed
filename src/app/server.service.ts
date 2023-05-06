import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }
  
  url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7a8215c989674e0b906b371e00d61c3c';

  getData() {
    return this.http.get(this.url);
  }
}
