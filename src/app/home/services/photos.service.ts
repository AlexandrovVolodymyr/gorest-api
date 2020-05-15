import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<any> {
    return this.http.get('https://gorest.co.in/public-api/photos?_format=json&access-token=MYe9Xcv7D4ub-nr4cjHyhbbeyAQ6DUnmD1X_');
  }

  getPhotoById(id: string): Observable<any> {
    return this.http.get(`https://gorest.co.in/public-api/photos/${id}?_format=json&access-token=MYe9Xcv7D4ub-nr4cjHyhbbeyAQ6DUnmD1X_`);
  }
}
