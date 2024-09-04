import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {

  client: Client = {
    id:           '',
    name:         '',
    cpf:          '',
    email:        '',
    password:     '',
    profile:      [],
    creationDate: ''
  }

  constructor(
    private service: ClientService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.client.id = this.route.snapshot.paramMap.get('id')
    this.findById();
  }

  findById(): void {
    this.service.findById(this.client.id).subscribe(response => {
      response.profile = []
      this.client = response;
    })
  }


  delete(): void{
    this.service.delete(this.client.id).subscribe(() => {
      this.toast.success('Usuário deletado com sucesso', 'delete');
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
}