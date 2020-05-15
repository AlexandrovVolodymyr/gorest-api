import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { Observable, Subject } from 'rxjs';
import { Photos } from '../../interfaces/photos';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  public photos$: Observable<Photos[]>;
  public search: string;

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    this.photos$ = this.photosService.getPhotos()
      .pipe(map((photos: any) => photos.result));
  }

}
