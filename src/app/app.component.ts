import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Authentication Demo';
  response = '';

  constructor(private appService: AppService) {}

  hello() {
    this.appService.hello().subscribe((response: any) => {
      // console.log(response);
      this.response = response.msg;
    });
  }
  
  secured() {
    this.appService.secured().subscribe((response: any) => {
      // console.log(response);
      this.response = response.msg;
    });
  }

}
