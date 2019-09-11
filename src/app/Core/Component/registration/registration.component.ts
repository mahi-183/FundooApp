import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Service/UserService/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import {User} from '../../Model/register';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  serviceValue:any;

  user : User = new User();

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router:Router, private route:ActivatedRoute, private snackBar:MatSnackBar) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      emailId: ['', [Validators.required,  Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  Advance(){
    this.serviceValue = 2;
  }
  Basic(){
    this.serviceValue = 1;
  }

  
  onSubmit() {

    console.log(" resgister ", this.registerForm.value);
    this.user.firstName = this.registerForm.controls.firstName.value;
    this.user.lastName = this.registerForm.controls.lastName.value;
    this.user.emailId = this.registerForm.controls.emailId.value;
    this.user.password = this.registerForm.controls.password.value;
    this.user.serviceId = this.serviceValue
    this.user.userName = this.registerForm.controls.userName.value;
    console.log("user model", this.user);
    
    this.userService.register(this.user).subscribe(data => {
      console.log(" response succesful", data);
      // this.alertService.success('Registration successful', true);
      this.snackBar.open(
        "Registration Successfully",
        "undo",
        { duration: 5000 }
        )
      this.router.navigate(['/login']);
    },
      error => {
        // this.alertService.error(error);
        // this.loading = false;
        this.snackBar.open(
          "Please try again",
          "undo",
          { duration: 5000 }
          )
      });
  }
}
