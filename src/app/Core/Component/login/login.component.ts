import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Service/UserService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {

    console.log(" resgister ", this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe(data => {
      console.log(" response succesful", data);
      // this.alertService.success('Registration successful', true);
      this.router.navigate(['/dashboard']);
    },
      error => {
        // this.alertService.error(error);
        // this.loading = false;
      });
  }
}
