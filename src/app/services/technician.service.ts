import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Technician } from '../models/technician';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  constructor(private hhtp: HttpClient) { }

  findAll(): Observable<Technician[]> {
    return this.hhtp.get<Technician[]>(`${API_CONFIG.baseUrl}/technicians`);
  }
}
