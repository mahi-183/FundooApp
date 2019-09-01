import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  constructor(private http:HttpClient) { }

  baseUrl = environment.BaseUrl;

  post(url, data)
  {
    console.log("data in http ",data);
    
    let option = {
      headers: new HttpHeaders({
        'Authorization' : 'bearer ' + localStorage.getItem('token'),
        'content-Type' : 'application/json'
        }) 
    }
    return this.http.post(this.baseUrl + url, data, option);
  }

}

