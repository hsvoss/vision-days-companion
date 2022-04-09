import {Component, OnInit} from '@angular/core';
import {DrawerService} from "../../../services/drawer.service";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  oldSmartphone: boolean = false;

  constructor(private drawerService: DrawerService, private breakpointObserver: BreakpointObserver,) {
  }


  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-height: 450px)'])
      .subscribe((state: BreakpointState) => {
        this.oldSmartphone = state.matches;
      });
  }

  onClick() {
    this.drawerService.setShowDrawer(false)
  }
}
