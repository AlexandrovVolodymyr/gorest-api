import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Subject } from 'rxjs';
import { map, takeUntil, throttleTime } from 'rxjs/operators';
import { Users } from '../../interfaces/users';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  public users: Users[];
  public displayedColumns: string[];
  public dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private usersService: UsersService) {
    this.displayedColumns =  ['id', 'first_name', 'last_name', 'gender'];
  }

  ngOnInit(): void {
    this.usersService.getUsers()
      .pipe(
        takeUntil(this.unsubscribe$),
        throttleTime(1000),
        map((data: any) => data.result)
      )
      .subscribe((users: Users[]) => {
        this.users = users;
        this.dataSource = new MatTableDataSource<Users>(this.users);
        this.dataSource.paginator = this.paginator;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
