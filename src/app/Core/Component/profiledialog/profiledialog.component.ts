import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { UserService } from '../../Service/UserService/user.service';

@Component({
  selector: 'app-profiledialog',
  templateUrl: './profiledialog.component.html',
  styleUrls: ['./profiledialog.component.scss']
})
export class ProfiledialogComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  selectedImage: Blob;
  userId: any;
  // imageUrl: any;

  constructor(
    public dialogRef: MatDialogRef<ProfiledialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService:UserService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
  
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.selectedImage = event.file
    console.log("selectedImage", this.selectedImage)
  }

  onUpload(){
    const uploadData = new FormData();
    uploadData.append('file',this.selectedImage);
    this.userId = localStorage.getItem('UserId');
    this.userService.uploadImage(this.userId,uploadData).subscribe(response=>{
      console.log("response",response['imageUrl'])
      localStorage.setItem('Image',response['imageUrl']);
      this.dialogRef.close(response);
    })
    // file.append();
  }
}
