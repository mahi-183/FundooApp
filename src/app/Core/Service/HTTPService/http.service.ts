import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  constructor(private http:HttpClient) { }

  /**
   * this url is user Microservice url
   */
  baseUrl = environment.BaseUrl;
  /**
   * this url is notes microservice url
   */
  baseUrl1 = environment.BaseUrl1;
 
  /**
   * add new user
   * @param url backurl
   * @param data data for registrered user
   */
  post(url, data)
  {
    console.log("data in http ",data);
    
    let option = {
      headers: new HttpHeaders({
        'Authorization' : 'bearer ' + localStorage.getItem('token'),
        'content-Type' : 'application/json'
        }) 
    }
    console.log("data in option ",option);
    console.log("data in http data",data);  
    return this.http.post(this.baseUrl + url, data, option);
  }

  /**
   * get user details
   * @param url backend url
   */
  get(url){
    console.log("inside http service url",url);
    let option = {
      headers: new HttpHeaders({
        'Authorization' : 'bearer ' + localStorage.getItem('token'),
        'content-Type' : 'application/json'
        }) 
    }
    return this.http.get(this.baseUrl+url,option);
  }

  /**
   * upload profile image
   * @param url back end url of upload profile image 
   * @param data 
   */
  postProfile(url, data)
  {
    let option = {
      headers: new HttpHeaders({
        'Authorization' : 'bearer ' + localStorage.getItem('token'),
        }) 
    }
    return this.http.post(this.baseUrl + url, data, option);
  }

  /*****************************Back end Http methods for notes*********************************************/
  /**
   * add notes
   * @param url backend url 
   * @param data data to add note
   */
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

  /**
   * get notes by user id
   * @param url backend url of get notes by user id
   */
  getNotes(url){
    console.log("inside httpservice",this.baseUrl1 + url);
    
    let option = {
      headers: new HttpHeaders({
        'Authorization' : 'bearer ' + localStorage.getItem('token'),
        'content-Type' : 'application/json'
        }) 
    }
    return this.http.get(this.baseUrl1 + url, option);
  }

  /**
   * upload the image on notes
   * @param url backurl
   * @param data data for image 
   */
  postImage(url, data)
  {
    console.log("data in http ",data);
    
    let option = {
      headers: new HttpHeaders({
        'Authorization' : 'bearer ' + localStorage.getItem('token'),
        }) 
    }
    console.log("data in option url ",url);
    console.log("data in http data baseUrl1",this.baseUrl1); 
    console.log("url",this.baseUrl1+url);
    return this.http.post(this.baseUrl1 + url, data, option);
  }
}