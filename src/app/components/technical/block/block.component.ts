import {Component, Input, OnInit} from '@angular/core';
import {animate, AUTO_STYLE, state, style, transition, trigger} from "@angular/animations";

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
    trigger('rotete', [
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
  @Input() room: string = "";

  @Input() collapsible: boolean = false;
  collapsed: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.collapsed = this.collapsible;
  }

  toggleCollapse() {
    if (this.collapsible) {
      this.collapsed = !this.collapsed;
    }
  }

}
