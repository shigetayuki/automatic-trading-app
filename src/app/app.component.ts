import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';
// import { table } from 'console';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})

export class AppComponent {
  title = 'automatic-trading';
  tab='';
  constructor(private contexts: ChildrenOutletContexts) {}
  getRouteAnimationData(){
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
