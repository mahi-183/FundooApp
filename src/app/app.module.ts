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
import { ReactiveFormsModule } from '@angular/forms';
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
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MaterialModule, 
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

