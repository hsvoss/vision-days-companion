import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  showDrawer$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
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
