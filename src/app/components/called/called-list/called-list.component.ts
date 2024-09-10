import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Called } from 'src/app/models/called';
import { CalledService } from 'src/app/services/called.service';

@Component({
  selector: 'app-called-list',
  templateUrl: './called-list.component.html',
  styleUrls: ['./called-list.component.css']
})
export class CalledListComponent implements OnInit {

  ELEMENT_DATA: Called[] = []
  FILTERED_DATA: Called[] = []

  displayedColumns: string[] = ['id', 'title', 'client', 'technician', 'openingDate', 'priority', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Called>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: CalledService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(response => {
      this.ELEMENT_DATA = response;
      this.dataSource = new MatTableDataSource<Called>(response);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  returnStatus(status: any): string {
    if(status == '0') {
      return 'ABERTO'
    } else if(status == '1'){
      return 'EM ANDAMENTO'
    } else {
      return 'ENCERRADO'
    }
  }

  returnPriority(priority: any): string {
    if(priority == '0') {
      return 'BAIXA'
    } else if(priority == '1'){
      return 'MEDIA'
    } else {
      return 'ALTA'
    }
  }

  orderByStatus(status: any): void{
    let list: Called[] = []
    this.ELEMENT_DATA.forEach(element => {
      if(element.status == status)
        list.push(element)
    });
    this.FILTERED_DATA = list;
    this.dataSource = new MatTableDataSource<Called>(list);
    this.dataSource.paginator = this.paginator;
  }
}
