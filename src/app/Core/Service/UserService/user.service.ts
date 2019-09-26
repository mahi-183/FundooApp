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
    return this.httpService.post('AccountUser/ForgetPassword?email='+data.email,data)
  }
  resetPassword(data){
    console.log("inside user service",data)
    return this.httpService.post('AccountUser/ResetPassword',data)
  }
  uploadImage(userId,uploadData)
  {
    console.log("inside user service userId",userId);
    console.log("inside user service uploadData",uploadData);
    return this.httpService.postProfile('AccountUser/ImageUpload?userId='+userId,uploadData);
  }

  SearchUser(SearchValue){
    console.log("userService searchValue",SearchValue);
    return this.httpService.get('AccountUser/searchUser?searchString='+SearchValue);
  }
}
