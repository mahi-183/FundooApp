import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../Service/UserService/user.service';
import { Route } from '@angular/compiler/src/core';
import { MatSnackBar } from '@angular/material';
import { error } from 'util'; 
import { SocialLoginModule,FacebookLoginProvider, AuthService } from "angular-6-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
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
      localStorage.setItem('UserId',response['userDetails'][0].id);
      localStorage.setItem('Image',response['userDetails'][0].image);
      this.snackBar.open(
        "login Successfull",
        "undo",
        { duration: 5000 }
        )
      this.router.navigate(['\dashboard']);
      },
      err =>
      {
        this.snackBar.open(
        "login not Successful",
        "undo",
        { duration: 5000 }
        )
        console.log("err", err);
      })
    }


    SocialLogin(socialPlatform : string){
      let socialPlatformProvider;
      if(socialPlatform == "facebook"){
        socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
      }

      this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          console.log(socialPlatform+" sign in data : " , userData);
          // Now sign-in with userData
          // ...
              
        }
      );
     console.log("inside the social login");
    }
}