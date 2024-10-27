import { Component } from '@angular/core';
import { RegisterService } from '../Services/register.service';
import { Registration } from '../Models/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  // onsubmit(value:any){
  //   alert(value); //eventBinding, template reference variable
  // }
  // name='';
  register:Registration={
    id: 0,
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    phoneNumber: 0
  }
  message='';
  constructor(private service:RegisterService){}
  onsubmit(){
    this.service.registration(this.register).subscribe({
      next : () => this.message="successfully registred",
      error : () => this.message="user not found"
    })
  }

}
