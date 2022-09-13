import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trend-svg',
  templateUrl: './trend-svg.component.html',
  styleUrls: ['./trend-svg.component.css']
})
export class TrendSvgComponent implements OnInit {
  @Input() trend!:number;
  constructor() { }

  ngOnInit(): void {
  }

}
