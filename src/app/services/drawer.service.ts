import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DrawerService implements OnInit {

  private showDrawer$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    router.events.subscribe(() => {
      this.setShowDrawer(false);
    });
  }

  ngOnInit() {
  }

  getShowDrawer(): Observable<boolean> {
    return this.showDrawer$.asObservable();
  }

  setShowDrawer(showHide: boolean): void {
    this.showDrawer$.next(showHide);
  }

  toggleDrawer(): void {
    this.showDrawer$.next(!this.showDrawer$.value);
  }

}
