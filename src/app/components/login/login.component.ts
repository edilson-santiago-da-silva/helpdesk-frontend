import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credentials } from 'src/app/models/credentials';
import { AuthService } from 'src/app/services/auth.service';

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
  password = new FormControl(null, Validators.minLength(3));


  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router) { }

  ngOnInit(): void {}

  logInto(){
    this.service.authenticate(this.creds).subscribe(response => {
      this.service.successfulLogin(response.headers.get('Authorization').substring(7))
      this.router.navigate([''])
    }, () => {
      this.toast.error('Usuário e/ou senha inválidos')
    } )

    
  }

  validatesFields(): boolean{
    return this.email.valid && this.password.valid
  }
}
