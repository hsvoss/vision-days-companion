import { ApplicationRef, Injectable, isDevMode } from '@angular/core';
import { SwUpdate } from "@angular/service-worker";
import { concat, first, interval, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CheckForUpdateService {

  constructor(appRef: ApplicationRef, updates: SwUpdate) {

    const appIsStable$: Observable<boolean> = appRef.isStable.pipe(first(isStable => isStable));
    const everyMinute$: Observable<number> = interval(60 * 1000);
    const everyMinuteOnceAppIsStable$ = concat(appIsStable$, everyMinute$);

    if (!isDevMode()) {
      everyMinuteOnceAppIsStable$.subscribe(() => {
        updates.checkForUpdate()
      });
    }
  }
}
