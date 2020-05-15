import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../../services/photos.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.scss']
})
export class AlbumItemComponent implements OnInit, OnDestroy {

  public photos;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private route: ActivatedRoute, private photosService: PhotosService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.photosService.getPhotos()
      .pipe(
        takeUntil(this.unsubscribe$),
      )
      .subscribe(photos => {
        this.photos = photos.result.filter(photo => photo.album_id === id);
        console.log(this.photos);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
