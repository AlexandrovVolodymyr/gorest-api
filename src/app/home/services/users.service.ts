import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
  // &access-token=MYe9Xcv7D4ub-nr4cjHyhbbeyAQ6DUnmD1X_
    return this.http.get<any>('https://gorest.co.in/public-api/users?_format=json&access-token=MYe9Xcv7D4ub-nr4cjHyhbbeyAQ6DUnmD1X_');
  }

  getUserById(id: string): Observable<string> {
    return this.http.get<any>(`https://gorest.co.in/public-api/users/${id}?_format=json&access-token=MYe9Xcv7D4ub-nr4cjHyhbbeyAQ6DUnmD1X_`);
  }
}
