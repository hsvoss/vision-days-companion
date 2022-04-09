import {Component, HostListener, ViewEncapsulation} from '@angular/core';
import {DrawerService} from 'src/app/services/drawer.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrls: ['./side-drawer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideDrawerComponent {


  showSideNav: Observable<boolean> = this.drawerService.getShowDrawer();
  windowWidth: number = window.innerWidth;

  constructor(private drawerService: DrawerService) {
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


  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(_: any) {
    this.windowWidth = window.innerWidth; // force recalculating Animation on orientationchange
    this.drawerService.showDrawer$.next(this.drawerService.showDrawer$.value)

  }

}
