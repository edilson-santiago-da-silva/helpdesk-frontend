import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Called } from '../models/called';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class CalledService {

  constructor(private http: HttpClient) { }

  
  findById(id: any): Observable<Called> {
    return this.http.get<Called>(`${API_CONFIG.baseUrl}/calleds/${id}`);
  }

  findAll(): Observable<Called[]> {
    return this.http.get<Called[]>(`${API_CONFIG.baseUrl}/calleds`);
  }

  create(called: Called): Observable<Called> {
    return this.http.post<Called>(`${API_CONFIG.baseUrl}/calleds`, called);
  }

  update(chamado: Called): Observable<Called> {
    return this.http.put<Called>(`${API_CONFIG.baseUrl}/calleds/${chamado.id}`, chamado);
  }
}
