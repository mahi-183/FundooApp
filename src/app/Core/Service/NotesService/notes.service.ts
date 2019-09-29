import { Injectable } from '@angular/core';
import { HTTPService } from '../HTTPService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor(private httpService:HTTPService) { }

  /*********************Notes Api starts*************************** */

  /**
   * Add notes api
   * @param data note data
   */
  AddNotes(data){
    console.log("inside notes Service",data);
    return this.httpService.postNotes('Notes/addNotes',data);
  }
  
  /**
   * get all notes by its note type
   * @param userid user id 
   * @param noteType note types if it is note = 0 or archive = 1 or trash = 2
   */
  getAllNotes(userid,noteType){
    console.log("inside notes service", userid);
    return this.httpService.getNotes('Notes/GetNotes?userId='+userid+'&noteType='+noteType);
  }

  /**
   * update note api
   * @param id note id
   * @param data note data which is going to upadate
   */
  updateNotes(id,data){
    console.log("inside notes service",data);
    return this.httpService.postNotes('Notes/UpdateNotes?id='+ id, data);
  }

  /**
   * get all notes by its type
   * @param id user id
   * @param noteType note type
   */
  getAllNotesByType(id,noteType){
    return this.httpService.getNotes('Notes/GetNotes?userId='+id+'&noteType='+noteType);
  }

  /**
   * delete note by its id
   * @param id note id
   */
  deleteNotes(id){
    console.log("inside notes delete service",id)
    return this.httpService.postNotes('Notes/DeleteNotes?id='+id,id);
  }

  /**
   * set reminder on note
   * @param userId user id
   */
  getAllReminderNotes(userId){
    console.log("inside notes delete service",userId)
    return this.httpService.getNotes('Notes/Reminder?userId='+userId);
  }

  /**
   * search note by given string
   * @param userId user id
   * @param searchValue search string
   */
  SearchNotes(userId,searchValue){
    console.log("userId inside notesService",userId)
    console.log("searchValue inside notesService",searchValue)
    return this.httpService.getNotes('Notes/Search?userId='+userId+'&searchString='+searchValue);
  }

  uploadImage(data,id){
    console.log("image",data);
    console.log("image id",id);
  
    return this.httpService.postImage('Notes/UploadImage?id='+id,data);
  }

  /**************************************** Labels Apis starts*********************************************** */
  /**
   *Labels api calls 
   * @param userId user id
   * @param data label data
   */
  AddLabels(userId,data){
    console.log("userId",userId);
    return this.httpService.postNotes('Label/Add',data);
  }

  /**
   * Get all labels on dashboard
   * @param userId user id
   */
  getAllLabels(userId){
    console.log("userId inside the notes service",userId);
    return this.httpService.getNotes('Label/DisplayById?UserId='+userId);
  }

  /**
   * update label api
   * @param id label id
   * @param data label data 
   */
  updateLabel(id,data){
    console.log("label id inside the notes service",id);
    return this.httpService.postNotes('Label/Update?labelId='+id,data);
  }

  /**
   * delete label
   * @param id label id
   */
  deletelabel(id){
    console.log('inside the notesService',id);
    return this.httpService.postNotes('Label/Delete?LabelId='+id,id);
  }

  /***********************************Add Collaborator******************************************** */
  addCollaborator(data){
    console.log('collaborator data',data);
    return this.httpService.postNotes('Notes/AddCollaborator',data);
  }
}
