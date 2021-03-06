import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './Core/Component/registration/registration.component';
import { MaterialModule } from '../app/app.material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Core/Component/login/login.component';
import { ForgotPasswordComponent } from './Core/Component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Core/Component/reset-password/reset-password.component';
import { DashboardComponent } from './Core/Component/dashboard/dashboard.component';
import { NotesComponent } from './Core/Component/notes/notes.component';
import { RemindersComponent } from './Core/Component/reminders/reminders.component';
import { LabelComponent } from './Core/Component/label/label.component';
import { TrashComponent } from './Core/Component/trash/trash.component';
import { TakeANoteComponent } from './Core/Component/take-a-note/take-a-note.component';
import { DisplayComponent } from './Core/Component/display/display.component';
import { IconComponent } from './Core/Component/icon/icon.component';
import { ArchiveComponent } from './Core/Component/archive/archive.component';
import { SearchComponent } from './Core/Component/serach/search/search.component';
import { ProfiledialogComponent } from './Core/Component/profiledialog/profiledialog.component';
import { LabelDialogComponent } from './Core/Component/label-dialog/label-dialog.component';
import { AuthGuard } from './Core/Service/Auth/auth.guard';
import { EditNoteComponent } from './Core/Component/edit-note/edit-note.component';
import { CollaborationComponent } from './Core/Component/collaboration/collaboration.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    NotesComponent,
    RemindersComponent,
    LabelComponent,
    TrashComponent,
    TakeANoteComponent,
    DisplayComponent,
    IconComponent,
    ArchiveComponent,
    SearchComponent,
    ProfiledialogComponent,
    LabelDialogComponent,
    EditNoteComponent,
    CollaborationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MaterialModule, 
    FlexLayoutModule,
    HttpClientModule,
    MatCheckboxModule,
  ],
  providers: [AuthGuard],  
  entryComponents: [ProfiledialogComponent,LabelDialogComponent,CollaborationComponent,EditNoteComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }

