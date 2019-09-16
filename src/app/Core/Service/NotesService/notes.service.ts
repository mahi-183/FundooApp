import { Injectable } from '@angular/core';
import { HTTPService } from '../HTTPService/http.service';
import { identifierModuleUrl } from '@angular/compiler';

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

  updateNotes(id,data){
    console.log("inside notes service",data);
    return this.httpService.postNotes('Notes/UpdateNotes?id='+ id, data);
  }

  getAllNotesByType(id,noteType){
    return this.httpService.getNotes('Notes/GetNotes?userId='+id+'&noteType='+noteType);
  }

  deleteNotes(id){
    console.log("inside notes delete service",id)
    return this.httpService.postNotes('Notes/DeleteNotes?id='+id,id);
  }

  getAllReminderNotes(userId){
    console.log("inside notes delete service",userId)
    return this.httpService.getNotes('Notes/Reminder?userId='+userId);
  }
}
