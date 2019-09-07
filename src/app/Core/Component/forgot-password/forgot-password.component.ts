import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../Service/UserService/user.service';
import { Router } from '@angular/router';
import { ForgotPassword } from '../../Model/forgotPassword';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm:FormGroup;
  
  
  constructor(private userService:UserService, private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit() {
  this.forgotPasswordForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  })
  }
  
  onSubmit()
  {
    var data = {
      email:this.forgotPasswordForm.value.email
    }
    console.log("forgotPassord",data);
    this.userService.forgotPassword(data).subscribe(response=>
      {
        console.log("forgot password successfull",response);

        this.router.navigate(['/forgotPassword']);
      },
      error=>{
        console.log("err",error);
      });
  }
}
