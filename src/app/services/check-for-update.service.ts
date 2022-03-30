import {ApplicationRef, Injectable} from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import {concat, first, interval} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CheckForUpdateService {

  constructor(appRef: ApplicationRef, updates: SwUpdate) {
    // Allow the app to stabilize first, before starting
    // polling for updates with `interval()`.
    const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
    const everyMinute$ = interval(60 * 1000);
    // const everyTenSeconds$ = interval( 10000);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everyMinute$);

    everySixHoursOnceAppIsStable$.subscribe(() => updates.checkForUpdate());
  }
}
