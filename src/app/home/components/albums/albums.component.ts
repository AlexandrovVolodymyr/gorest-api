import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Albums } from '../../interfaces/albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit, OnDestroy {

  public albums: Albums[];
  public displayedColumns: string[];
  public dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private albumsService: AlbumsService) {
    this.displayedColumns = ['id', 'user_id', 'title'];
  }

  ngOnInit(): void {
    this.albumsService.getAlbums()
      .pipe(
        takeUntil(this.unsubscribe$),
        map((data: any) => data.result)
      )
      .subscribe((albums: Albums[]) => {
        this.albums = albums;
        this.dataSource = new MatTableDataSource<Albums>(this.albums);
        this.dataSource.paginator = this.paginator;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
