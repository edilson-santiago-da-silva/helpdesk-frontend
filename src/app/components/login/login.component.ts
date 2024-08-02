import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credentials } from 'src/app/models/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credentials = {
    email: '',
    password: ''
  }

  email = new FormControl(null, Validators.email);
  password = new FormControl(null, Validators.minLength(9));


  constructor(private toast: ToastrService) { }

  ngOnInit(): void {
  }

  logInto(){
    this.toast.error('usuário e/ou senha inválidos!', 'Login');
    this.creds.password = '';
    
  }

  validatesFields(): boolean{
    if(this.email.valid && this.password.valid){
      return true;
    } else {
      return false;
    }
  }
}
