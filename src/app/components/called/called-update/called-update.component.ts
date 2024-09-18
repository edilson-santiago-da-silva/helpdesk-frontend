import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Called } from 'src/app/models/called';
import { Client } from 'src/app/models/client';
import { Technician } from 'src/app/models/technician';
import { CalledService } from 'src/app/services/called.service';
import { ClientService } from 'src/app/services/client.service';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-called-update',
  templateUrl: './called-update.component.html',
  styleUrls: ['./called-update.component.css']
})
export class CalledUpdateComponent implements OnInit {
  called: Called ={
    priority: '',
    status: '',
    title: '',
    comments: '',
    technician: '',
    client: '',
    clientName: '',
    clientTechnician: '',
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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.called.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.findAllClients();
    this.findAllTechnicians();
  }

  findById(): void {
    this.calledService.findById(this.called.id).subscribe(resposta => {
      this.called = resposta;
    }, ex => {
      this.toastService.error(ex.error.error);
    })
  }

  update(): void {
    this.calledService.update(this.called).subscribe(resposta => {
      this.toastService.success('Chamado atualizado com sucesso', 'Atualizar chamado');
      this.router.navigate(['calleds']);
    }, ex => {
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

  returnStatus(status: any): string {
    if(status == '0') {
      return 'ABERTO'
    } else if(status == '1') {
      return 'EM ANDAMENTO'
    } else {
      return 'ENCERRADO'
    }
  }

  returnPriority(priority: any): string {
    if(priority == '0') {
      return 'BAIXA'
    } else if(priority == '1') {
      return 'MÉDIA'
    } else {
      return 'ALTA'
    }
  }


}