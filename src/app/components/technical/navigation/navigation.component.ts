import {Component} from '@angular/core';
import {DrawerService} from "../../../services/drawer.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(private drawerService: DrawerService) {
  }

  onClick() {
    this.drawerService.setShowDrawer(false)
  }
}
