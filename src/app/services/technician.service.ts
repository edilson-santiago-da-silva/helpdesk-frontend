import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Technician } from '../models/technician';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Technician> {
    return this.http.get<Technician>(`${API_CONFIG.baseUrl}/technicians/${id}`);
  }

  findAll(): Observable<Technician[]> {
    return this.http.get<Technician[]>(`${API_CONFIG.baseUrl}/technicians`);
  }

  create(technician: Technician): Observable<Technician> {
    return this.http.post<Technician>(`${API_CONFIG.baseUrl}/technicians`, technician);
  }

  update(technician: Technician): Observable<Technician> {
    return this.http.put<Technician>(`${API_CONFIG.baseUrl}/technicians/${technician.id}`, technician);
}

}
