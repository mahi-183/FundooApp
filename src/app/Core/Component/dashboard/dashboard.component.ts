import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { DataService } from '../../Service/DataService/data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProfiledialogComponent } from '../profiledialog/profiledialog.component';
import { LabelDialogComponent } from '../label-dialog/label-dialog.component';
import { NotesService } from '../../Service/NotesService/notes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  searchValue;
  mobileQuery: MediaQueryList;
  FirstName="";
  Email ="";
  Image = "";
  LastName="";
  private _mobileQueryListener: () => void;
  notesLabel: any;
  UserId: string;
  islist : boolean =true;
  message: boolean;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog,
    private router:Router, private dataService:DataService, private notesService:NotesService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
  this.FirstName=localStorage.getItem('FirstName');
  this.LastName=localStorage.getItem('LastName');
  this.Email=localStorage.getItem('Email');
  this.Image=localStorage.getItem('Image');
  this.UserId = localStorage.getItem('UserId');
  this.getAllLabel();
  this.dataService.messageOfGrid.subscribe(message => this.message = message);
  this.islist = true;
  }

  //sign out the 
  signOut(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

  ///chnage view of notes like grid view and list view
  changeView()
  {
    this.islist=!this.islist;
    console.log(this.islist);
    this.dataService.changeMessageGrid(this.islist);
  }
  //add new user 
  AddAccount()
  {
    this.router.navigate(['register']);
  }

  //refresh the page
  refresh(){
    location.reload();
  }

  //data service method call for searching the notes
  search(event: any){
    this.searchValue = event.target.value +'\n';
    console.log("serach value iside dashboard",this.searchValue);
    this.router.navigate(['dashboard/search']);
    this.dataService.changeMsg(this.searchValue);
  }

//profile pic upload dialog model 
  openDialog(): void {
    const dialogRef = this.dialog.open(ProfiledialogComponent, {
      width: '500px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.Image = result['imageUrl'];
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  //Edit Label dialog model
  openLabelDialog():void{
    console.log("inside the dashboard");
    const dialogRef = this.dialog.open(LabelDialogComponent,{
      
      data: this.notesLabel
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log("user id in dashboard",this.UserId);
      
      console.log("dashboard",result);
      //call here addnotesLabel method 
    });
  }

  getAllLabel(){
    this.notesService.getAllLabels(this.UserId).subscribe(response=>{
      console.log("inside dashboard labels data:",response);
      this.notesLabel = response['result'];
      console.log("the notesLabel array",this.notesLabel['result']);
    })
  }

  //add label event emmiter event 
  addUpdate($event)
  {
    this.getAllLabel();
  }
}
