import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-called-create',
  templateUrl: './called-create.component.html',
  styleUrls: ['./called-create.component.css']
})
export class CalledCreateComponent implements OnInit {

  priority: FormControl = new FormControl(null, [Validators.required])
  status: FormControl = new FormControl(null, [Validators.required])
  title: FormControl = new FormControl(null, [Validators.required])
  description: FormControl = new FormControl(null, [Validators.required])
  technician: FormControl = new FormControl(null, [Validators.required])
  client: FormControl = new FormControl(null, [Validators.required])

  constructor() { }

  ngOnInit(): void {
    
  }

}
