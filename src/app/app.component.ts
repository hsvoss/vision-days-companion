import {Component, OnInit} from '@angular/core';
import {PromptUpdateService} from "./services/prompt-update.service";
import {CheckForUpdateService} from "./services/check-for-update.service";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
import {DrawerService} from "./services/drawer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  widescreenMode: boolean = true;

  constructor(private promptUpdateService: PromptUpdateService,
              private checkForUpdateService: CheckForUpdateService,
              public breakpointObserver: BreakpointObserver,
              private navigationService: DrawerService) {
  }


  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 992px)'])
      .subscribe((state: BreakpointState) => {
        this.widescreenMode = state.matches;
      });
  }

  toggleSidebar() {
    this.navigationService.toggleDrawer()
  }
}
