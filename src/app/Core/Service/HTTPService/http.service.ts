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
  baseUrl1 = environment.BaseUrl1;
  post(url, data)
  {
    console.log("data in http ",data);
    
    let option = {
      headers: new HttpHeaders({
        'Authorization' : 'bearer ' + localStorage.getItem('token'),
        'content-Type' : 'application/json'
        }) 
    }
    console.log("data in http ",option);
    console.log("data in http ",data);  
    return this.http.post(this.baseUrl + url, data, option);
  }
  //for forgetPassord api
  postate(url, data)
  {
    console.log("data in http ",data.email);
    
    let option = {
      headers: new HttpHeaders({
        'Authorization' : 'bearer ' + localStorage.getItem('token'),
        'content-Type' : 'application/json'
        }) 
    }
    return this.http.post(this.baseUrl + url + data.email, option);
  }

  ////for notes microservice call
  postNotes(url, data)
  {
    console.log("data in http ",data);
    
    let option = {
      headers: new HttpHeaders({
        'Authorization' : 'bearer ' + localStorage.getItem('token'),
        'content-Type' : 'application/json'
        }) 
    }
    console.log("data in http ", option);
    console.log("data in http ", data);  
    return this.http.post(this.baseUrl1 + url, data, option);
  }

  getNotes(url){
    console.log("inside httpservice",this.baseUrl1 + url);
    
    let option = {
      headers: new HttpHeaders({
        'Authorization' : 'bearer ' + localStorage.getItem('token'),
        'content-Type' : 'application/json'
        }) 
    }
    // this.baseUrl1 + url
    return this.http.get(this.baseUrl1 + url, option);
  }
}