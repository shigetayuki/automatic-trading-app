import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit,AfterViewInit {
  @Input() activeFlg!: Number;
  @ViewChild('tabList') tabList!:ElementRef;
  constructor() { }
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    let cnt=0; 
    let itemList = this.tabList.nativeElement.getElementsByTagName('a');
    for(let item of itemList){
      if(cnt==this.activeFlg){
        item.setAttribute('class','btn btn-dark')
      }else{
        item.setAttribute('class','btn btn-outline-dark')
      }
      cnt++;
    }
  }
}
