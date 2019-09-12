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
  
  getAllNotes(userid){
    console.log("inside notes service", userid);
    return this.httpService.getNotes('Notes/get/'+ userid);
  }
}
