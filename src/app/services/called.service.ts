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

  findAll(): Observable<Called[]> {
    return this.http.get<Called[]>(`${API_CONFIG.baseUrl}/calleds`);
  }
}
