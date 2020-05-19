import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<any> {
    return this.http.get(`${environment.api}/photos`);
  }

  getPhotoById(id: string): Observable<any> {
    return this.http.get(`${environment.api}/photos/${id}`);
  }
}
