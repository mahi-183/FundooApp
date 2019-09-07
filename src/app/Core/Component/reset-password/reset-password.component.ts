import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Service/UserService/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm:FormGroup
  constructor(private userService:UserService, private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword:['',[Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit(){
    
    var data = {
      email:this.resetPasswordForm.value.email
    }
    console.log("resetPassword data",this.resetPasswordForm.value);
    this.userService.resetPassword(data).subscribe(response=>
      {
        console.log("password successfuly reset",response);
        this.router.navigate(['\login']);
      },
      error=>{
        console.log("password not reset",error);
      });
  }
}
