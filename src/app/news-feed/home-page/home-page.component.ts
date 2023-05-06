import { Component } from '@angular/core';

import { ServerService}  from '../../server.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  responseData=[]
  constructor(private serverService :ServerService ) {}
  ngOnInit() {
    this.serverService.getData().subscribe((response:any) =>{
      if(response.status=="ok" && response['articles']){
        this.responseData= response['articles'];
        console.log(response,"errrrrrrrrrrr");
      }
    });

  }
}
