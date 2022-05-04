import {Component, Input, OnInit} from '@angular/core';
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  @Input() heading: string = "";
  @Input() beginn: string = "";
  @Input() end: string = "";
  @Input() speaker: string = "";
  @Input() speakerLong: string | undefined = undefined;
  @Input() room: string = "";

  @Input() collapsible: boolean = false;

  allowLongSpeaker: boolean = false;

  constructor(public breakpointObserver: BreakpointObserver,) {
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        this.allowLongSpeaker = state.matches;
      });
  }


}
