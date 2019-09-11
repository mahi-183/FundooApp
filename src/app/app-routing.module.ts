import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './Core/Component/registration/registration.component';
import { LoginComponent } from './Core/Component/login/login.component';
import { ForgotPasswordComponent } from './Core/Component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Core/Component/reset-password/reset-password.component';
import { DashboardComponent } from './Core/Component/dashboard/dashboard.component';
import { NotesComponent } from './Core/Component/notes/notes.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'register',
    pathMatch:'full'
  },
  {
    path:'register',
    component:RegistrationComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forgotPassword',
    component:ForgotPasswordComponent
  },
  {
    path:'resetPassword',
    component:ResetPasswordComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {
      path:'',
      redirectTo:'notes',
      pathMatch:'full'
    },
      {
        path:'notes',
        component:NotesComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
