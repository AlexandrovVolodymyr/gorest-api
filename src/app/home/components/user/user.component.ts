import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { Users } from '../../interfaces/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  public albums;
  public user: Users;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.albumsService.getAlbums()
      .pipe(
        takeUntil(this.unsubscribe$),
      )
      .subscribe((albums: any) => {
        if (albums) {
          this.albums = albums.result.filter(album => album.user_id === id);
        }
      });

    this.usersService.getUserById(id)
      .pipe(
        takeUntil(this.unsubscribe$),
      )
      .subscribe((user: any) => this.user = user.result);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
