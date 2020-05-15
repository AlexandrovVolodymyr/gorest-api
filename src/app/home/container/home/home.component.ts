import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public isOpen: boolean;
  public mode: MatDrawerMode;

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    breakpointObserver: BreakpointObserver,
  ) {
    this.mode = 'side';
    breakpointObserver.observe([Breakpoints.HandsetPortrait])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(result => {
        if (result.matches) {
          this.mode = 'push';
        } else {
          this.mode = 'side';
        }
        this.isOpen = !result.matches;
      });
  }

  ngOnInit(): void {
  }

  public toggle(open: boolean) {
    this.isOpen = open;
  }

  public backdropClick() {
    this.isOpen = false;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
