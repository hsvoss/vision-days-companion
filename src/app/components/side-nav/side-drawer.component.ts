import {Component, ViewEncapsulation} from '@angular/core';
import {DrawerService} from 'src/app/services/drawer.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrls: ['./side-drawer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideDrawerComponent {

  showSideNav: Observable<boolean> = this.navService.getShowDrawer();
  private windowWidth: number = window.innerWidth;

  constructor(private navService: DrawerService) {
  }

  calcAnimation(showNav: boolean | null) {
    let style: any = {};
    style.transition = 'right 0.6s, visibility 0.6s';
    style.width = this.windowWidth + 'px';
    style.right = (showNav ? 0 : (this.windowWidth * -1)) + 'px';
    return style;
  }

  onResize(_: any): void {
    this.windowWidth = window.innerWidth;
  }
}
