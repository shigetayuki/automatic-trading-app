import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CodeImp } from '../interface/code-imp';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
  @Input() items!: CodeImp[];
  @Input() model!: string;
  @Output() modelChange = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onDropDownChange(model:string) {
    this.modelChange.emit(model);
  }
}
