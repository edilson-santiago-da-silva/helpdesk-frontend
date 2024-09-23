import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Called } from 'src/app/models/called';
import { CalledService } from 'src/app/services/called.service';

@Component({
  selector: 'app-called-read',
  templateUrl: './called-read.component.html',
  styleUrls: ['./called-read.component.css']
})
export class CalledReadComponent implements OnInit {
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

  constructor(
    private calledService: CalledService,
    private toastService:    ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.called.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.calledService.findById(this.called.id).subscribe(resposta => {
      console.log(resposta);
      this.called = resposta;
    }, ex => {
      this.toastService.error(ex.error.error);
    })
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
