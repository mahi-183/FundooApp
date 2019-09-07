import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../Service/UserService/user.service';
import { Route } from '@angular/compiler/src/core';
import { MatSnackBar } from '@angular/material';
import { error } from 'util'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  token:string

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router:Router, private route:ActivatedRoute, private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
   this.token = this.route.snapshot.paramMap.get('token'),
    console.log("token:"+this.token)
  }  

  onSubmit() {

    console.log(" resgister ", this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe(
      response => {
      console.log("The response of login",response);
      localStorage.setItem('token',response['token']);
      localStorage.setItem('FirstName',response['userDetails'][0].firstName);
      localStorage.setItem('LastName',response['userDetails'][0].lastName);
      localStorage.setItem('UserName',response['userDetails'][0].userName);
      localStorage.setItem('Email',response['userDetails'][0].email);
      this.router.navigate(['\dashboard']);
      },
      err =>
      {
        console.log("err", err);
      })
    }
    SocialLogin(){
     console.log("inside the social login");
    }
}