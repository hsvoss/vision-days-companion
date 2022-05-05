import { Component, OnInit } from '@angular/core';
import { Platform } from "@angular/cdk/platform";
import { take, timer } from "rxjs";

@Component({
  selector: 'app-install-prompt',
  templateUrl: './install-prompt.component.html',
  styleUrls: ['./install-prompt.component.scss']
})
export class InstallPromptComponent implements OnInit {

  show: boolean = false;

  constructor(private platform: Platform) {
  }

  ngOnInit(): void {
    if (this.platform.IOS) {
      // @ts-ignore
      const isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator['standalone']);
      if (!isInStandaloneMode) {
        timer(2000)
          .pipe(take(1))
          .subscribe(() => {
            if (localStorage.getItem('dontShoInstallPrompt') !== 'true') {
              this.show = true;
            }
          });
      }
    }
  }

  onClose() {
    this.show = false;
    localStorage.setItem('dontShoInstallPrompt', 'true');
  }
}
