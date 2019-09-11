import { Injectable } from '@angular/core';
import { HTTPService } from '../HTTPService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpService:HTTPService) { }
  AddNotes(data){
    console.log("inside notes Service",data);
    return this.httpService.postNotes('Notes/addNotes',data);
  }
  
  register(data){
    console.log("inside user service",data)
   return this.httpService.post('AccountUser/UserRegister',data)
  }
  
}
