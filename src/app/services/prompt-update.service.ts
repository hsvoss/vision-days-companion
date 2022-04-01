import {Injectable} from '@angular/core';
import {SwUpdate, UpdateAvailableEvent} from "@angular/service-worker";

@Injectable({
  providedIn: 'root'
})
export class PromptUpdateService {

  constructor(updates: SwUpdate) {
    updates.available.subscribe((event: UpdateAvailableEvent) => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }
}
