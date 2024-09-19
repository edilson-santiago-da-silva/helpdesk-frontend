import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Called } from 'src/app/models/called';
import { Client } from 'src/app/models/client';
import { Technician } from 'src/app/models/technician';
import { CalledService } from 'src/app/services/called.service';
import { ClientService } from 'src/app/services/client.service';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-called-create',
  templateUrl: './called-create.component.html',
  styleUrls: ['./called-create.component.css']
})
export class CalledCreateComponent implements OnInit {
  
  called: Called ={
    priority: '',
    status: '',
    title: '',
    comments: '',
    technician: '',
    client: '',
    nameClient: '',
    nameTechnician: '',
  }

  clients: Client[] = []
  technicians: Technician[] = []

  priority: FormControl = new FormControl(null, [Validators.required])
  status: FormControl = new FormControl(null, [Validators.required])
  title: FormControl = new FormControl(null, [Validators.required])
  comments: FormControl = new FormControl(null, [Validators.required])
  technician: FormControl = new FormControl(null, [Validators.required])
  client: FormControl = new FormControl(null, [Validators.required])


  constructor(
    private calledService: CalledService,
    private clientService: ClientService,
    private technicianService: TechnicianService,
    private toastService:    ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.findAllClients();
    this.findAllTechnicians();
  }

  create(): void {
    this.calledService.create(this.called).subscribe(resposta => {
      this.toastService.success('Chamado criado com sucesso', 'Novo chamado');
      this.router.navigate(['calleds']);
    }, ex => {
      console.log(ex);

      this.toastService.error(ex.error.error);
    })
  }

  findAllClients(): void {
    this.clientService.findAll().subscribe(resposta => {
      this.clients = resposta;
    })
  }

  findAllTechnicians(): void {
    this.technicianService.findAll().subscribe(resposta => {
      this.technicians = resposta;
    })
  }

  validFields(): boolean {
    return this.priority.valid && this.status.valid &&
      this.title.valid && this.comments.valid &&
      this.technician.valid && this.client.valid 
  }

}
