import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Photos } from '../../interfaces/photos';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss']
})
export class PhotoItemComponent implements OnInit {

  public photo: Photos;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private photosService: PhotosService
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.photosService.getPhotoById(id)
      .pipe(
        takeUntil(this.unsubscribe$),
      )
      .subscribe(photo => this.photo = photo.result);
  }

}
