import {Component, OnInit} from '@angular/core';
import {PromptUpdateService} from "./services/prompt-update.service";
import {LogUpdateService} from "./services/log-update.service";
import {CheckForUpdateService} from "./services/check-for-update.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vision-days-companion';

  constructor(private promptUpdateService: PromptUpdateService, private logUpdateService: LogUpdateService, private checkForUpdateService: CheckForUpdateService) {
    // constructor(promptUpdateService:PromptUpdateService, logUpdateService: LogUpdateService, checkForUpdateService :CheckForUpdateService) {
  }

  ngOnInit() {

    // if (this.swUpdate.isEnabled) {
    //
    //   this.swUpdate.available.subscribe(() => {
    //
    //     if(confirm("New version available. Load New Version?")) {
    //
    //       window.location.reload();
    //     }
    //   });
    // }
  }

}
