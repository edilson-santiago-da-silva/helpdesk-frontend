import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client = {
    id:           '',
    name:         '',
    cpf:          '',
    email:        '',
    password:     '',
    profile:      [],
    creationDate: ''
  }

  name : FormControl = new FormControl(null, Validators.minLength(3))
  cpf : FormControl = new FormControl(null, Validators.required)
  email : FormControl = new FormControl(null, Validators.email)
  password : FormControl = new FormControl(null, Validators.minLength(3))


  constructor(
    private service: ClientService,
    private toast: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.client).subscribe(() => {
      this.toast.success('Técnico cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['clients'])
    }, ex => {
      if(ex.error.errors){
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
          });
        } else{
          this.toast.error(ex.error.message);
        }
      })
  }

  addProfile(profile: any): void{
    if(this.client.profile.includes(profile)){
      this.client.profile.splice(this.client.profile.indexOf(profile), 1);
    } else {
      this.client.profile.push(profile);
    }
  }

  validatesFields(): boolean {
    return this.name.valid && this.cpf.valid && this.email.valid && this.password.valid
  }

}
