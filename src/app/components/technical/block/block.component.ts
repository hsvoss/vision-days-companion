import {Component, Input, OnInit} from '@angular/core';
import {animate, AUTO_STYLE, state, style, transition, trigger} from "@angular/animations";
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";

const DEFAULT_DURATION: number = 600;

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  animations: [trigger('collapse', [
    state('false', style({height: AUTO_STYLE, visibility: AUTO_STYLE})),
    state('true', style({height: '0', visibility: 'hidden'})),
    transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
    transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
  ]),
    trigger('rotate', [
      state('false', style({transform: 'rotate(0)'})),
      state('true', style({transform: 'rotate(-90deg)'})),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
    ])
  ]
})
export class BlockComponent implements OnInit {

  @Input() heading: string = "";
  @Input() beginn: string = "";
  @Input() end: string = "";
  @Input() speaker: string = "";
  @Input() speakerLong: string | undefined = undefined;
  @Input() room: string = "";

  @Input() collapsible: boolean = false;
  collapsed: boolean = false;


  allowLongSpeaker: boolean = false;

  constructor(public breakpointObserver: BreakpointObserver,) {
  }

  ngOnInit(): void {
    this.collapsed = this.collapsible;
    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        this.allowLongSpeaker = state.matches;
      });
  }


  toggleCollapse() {
    if (this.collapsible) {
      this.collapsed = !this.collapsed;
    }
  }

}
