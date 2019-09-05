import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Service/UserService/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  onSubmit() {

    console.log(" resgister ", this.registerForm.value);
    this.userService.register(this.registerForm.value).subscribe(data => {
      console.log(" response succesful", data);
      // this.alertService.success('Registration successful', true);
      this.router.navigate(['/login']);
    },
      error => {
        // this.alertService.error(error);
        // this.loading = false;
      });
  }
}
