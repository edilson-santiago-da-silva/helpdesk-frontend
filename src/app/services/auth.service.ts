import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient ) { }

  authenticate(creds: Credentials){
    return this.http.post(`${API_CONFIG.baseUrl}/login`, creds, {
      observe: 'response',
      responseType: 'text'
    })
  }

  successfulLogin(authToken: string) {
    localStorage.setItem('token', authToken)
  }
}
