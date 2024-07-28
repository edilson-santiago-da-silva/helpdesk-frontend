import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Technician } from 'src/app/models/technician';

@Component({
  selector: 'app-technician-list',
  templateUrl: './technician-list.component.html',
  styleUrls: ['./technician-list.component.css']
})
export class TechnicianListComponent implements OnInit {

  ELEMENT_DATA: Technician[] = [
    {
      id: 1,
      name: 'Edilson Santiago',
      cpf: '123.456.789-10',
      email: 'edilsonsantiagoe7@gmail.com',
      password: '1234',
      profile: ['0'],
      creationDate: '28/07/2024'
    }
  ]

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource = new MatTableDataSource<Technician>(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
