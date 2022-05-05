import { Injectable } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from "@angular/service-worker";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class PromptUpdateService {

  constructor(updates: SwUpdate, private spinnerService: NgxSpinnerService) {
    updates.available.subscribe((event: UpdateAvailableEvent) => {

      updates.activateUpdate().then(async () => {
        this.spinnerService.show();
        setTimeout(async () => {
          document.location.reload()
          this.spinnerService.hide();
        }, 600)

      });
    });
  }
}
