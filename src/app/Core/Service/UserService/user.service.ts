import { Injectable } from '@angular/core';
import { HTTPService } from '../../Service/HTTPService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService : HTTPService) { }

  register(data){
    console.log("inside user service",data)
   return this.httpService.post('AccountUser/UserRegister',data)
  }
  
  login(data){
    console.log("inside user service",data)
   return this.httpService.post('AccountUser/UserLogin',data)
  }

  forgotPassword(data){
    console.log("inside user service",data)
    return this.httpService.postate('AccountUser/ForgetPassword?email=',data)
  }
  resetPassword(data){
    console.log("inside user service",data)
    return this.httpService.post('AccountUser/ResetPassword',data)
  }
}
