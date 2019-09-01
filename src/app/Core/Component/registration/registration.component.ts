import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Service/UserService/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
registerForm:FormGroup
  constructor(private userService:UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]]
  });
  }


  onSubmit()
    {
      let userData={
        "FirstName":this.registerForm.value.firstName,
        "LastName" :this.registerForm.value.LastName,
        "EmailId"  :this.registerForm.value.email,
        "Password" :this.registerForm.value.password,
      }

    console.log(" resgister ",this.registerForm.value);
    this.userService.register(userData).subscribe(data => {
    console.log(" response succesful",data);
    // this.alertService.success('Registration successful', true);
    //this.router.navigate(['/login']);
    },
    error => {
    // this.alertService.error(error);
    // this.loading = false;
    });
  }
}
