import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${environment.api}/users`);
  }

  getUserById(id: string): Observable<string> {
    return this.http.get<any>(`${environment.api}/users/${id}`);
  }
}
