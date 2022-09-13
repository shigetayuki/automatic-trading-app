import { Component, DoCheck, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Authority } from '../authority';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit{
  @ViewChild('menuModalCantainer') menuModalCantainer!:ElementRef;
  constructor(private router:Router) { }
  auth :Authority = new Authority(this.router);
  ngOnInit(): void {

  }
  closeModal():void{
    let display=this.menuModalCantainer.nativeElement.style.display;
    if(display=='block'){
      this.menuModalCantainer.nativeElement.style.display='none';
    }
  }
  openMenu(): void {
    let display=this.menuModalCantainer.nativeElement.style.display;
    if(display=='block'){
      this.menuModalCantainer.nativeElement.style.display='none';
    }else{
      this.menuModalCantainer.nativeElement.style.display='block';
    }
  }
  changeTab(tabName:string):void{
    if(tabName==""){
      this.auth.logout();
    }else if(tabName=="home"){
      this.router.navigate(['']);
    }else{
      this.router.navigate([tabName]);
    }
    let display=this.menuModalCantainer.nativeElement.style.display;
    if(display=='block'){
      this.menuModalCantainer.nativeElement.style.display='none';
    }
  }
}
