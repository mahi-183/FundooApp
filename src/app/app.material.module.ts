import { NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule, MatInputModule, MatToolbarModule, MatSidenavModule, } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatChipsModule } from '@angular/material/chips';
import { MessagingService } from './shared/messaging.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
    
    imports: [
        MatFormFieldModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule,
        ImageCropperModule,
        MatChipsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFireMessagingModule,

    ],
    exports: [
        MatFormFieldModule,
        MatSidenavModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        MatListModule,
        MatMenuModule,
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule,
        ImageCropperModule,
        MatChipsModule
    ],
    providers: [MessagingService],
  })
  export class MaterialModule { }
  