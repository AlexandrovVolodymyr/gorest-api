import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) {
  }

  getAlbums() {
    return this.http.get('https://gorest.co.in/public-api/albums?_format=json&access-token=MYe9Xcv7D4ub-nr4cjHyhbbeyAQ6DUnmD1X_');
  }
}
