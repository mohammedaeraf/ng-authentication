import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  apiUrlHello: string = 'http://localhost:8080/greetings';
  apiUrlSecured: string = 'http://localhost:8080/secured';

  private username = 'rohit';
  private password = 'r123';
  
  constructor(private httpClient: HttpClient) { 
  }

  secured() {
    // Encode the username and password in base64
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    console.log(authHeader);
    // Set the headers, including the Authorization header
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authHeader  // 'Authorization': 'Basic eWFzaXI6eUAxMjM='
    });

    console.log(httpHeaders);

    return this.httpClient.get(this.apiUrlSecured, { headers: httpHeaders });
  }

  greetings() {
    return this.httpClient.get(this.apiUrlHello);
  }

}
