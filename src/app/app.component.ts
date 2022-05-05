import { Component, OnInit } from '@angular/core';
import { PromptUpdateService } from "./services/prompt-update.service";
import { CheckForUpdateService } from "./services/check-for-update.service";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { DrawerService } from "./services/drawer.service";

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
    private drawerService: DrawerService) {
  }


  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 992px)'])
      .subscribe((state: BreakpointState) => {
        this.widescreenMode = state.matches;
        if (this.widescreenMode) {
          this.drawerService.setShowDrawer(false)
        }
      });
  }

  toggleSidebar() {
    this.drawerService.toggleDrawer()
  }


  onClick() {
    this.drawerService.setShowDrawer(false)
  }

}
