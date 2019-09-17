import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { DataService } from '../../Service/DataService/data.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  searchValue;
  mobileQuery: MediaQueryList;
  FirstName="mahesh";
  Email = "maheshaurad183@gmail.com";
  // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  // fillerContent = Array.from({length: 50}, () =>'sdfsf');
     
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog,private router:Router, private dataService:DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {

  }

  signOut(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
  refresh(){
    location.reload();
  }
  search(event: any){
    this.searchValue = event.target.value +'\n';
    console.log("serach value iside dashboard",this.searchValue);
    this.router.navigate(['dashboard/search']);
    this.dataService.changeMsg(this.searchValue);
  }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(, {
  //     width: '250px',
  //     // data: {name: this.name, animal: this.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     // this.animal = result;
  //   });
  // }

}
