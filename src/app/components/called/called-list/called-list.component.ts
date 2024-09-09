import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Called } from 'src/app/models/called';

@Component({
  selector: 'app-called-list',
  templateUrl: './called-list.component.html',
  styleUrls: ['./called-list.component.css']
})
export class CalledListComponent implements OnInit {

  ELEMENT_DATA: Called[] = [
    {
      id:                               1,	    
      openingDate:	         '21/06/2021',
      closingDate:	         '21/06/2021',
      priority:	                   'ALTA',
      status:		              'ANDAMENTO',
      title:		              'Chamado 1',	
      description:	    'Teste chamado 1',
      technician: 	                    1,
      client:		                        6,
      clientName:	      '   Valdir Cezar',
      clientTechnician: 'Albert Einstein',	
    }
  ]

  displayedColumns: string[] = ['id', 'title', 'client', 'technician', 'openingDate', 'priority', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Called>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
