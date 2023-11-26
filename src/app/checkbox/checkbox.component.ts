import { escapeRegExp } from '@angular/compiler/src/util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit {
  @Input() model!: string;
  @Input() preLabel?: string;
  @Input() sufLabel?: string;
  @Output() modelChange = new EventEmitter<string>();

  private readonly CHECK_ON = '1';
  private readonly CHECK_OFF = '0';

  constructor() {}
  ngOnInit(): void {}

  onChecked(model: string): boolean {
    if (model == this.CHECK_ON) {
      return true;
    } else {
      return false;
    }
  }

  onChange(event: Event) {
    if ((event.target as HTMLInputElement).checked) {
      this.model = this.CHECK_ON;
    } else {
      this.model = this.CHECK_OFF;
    }
    this.modelChange.emit(this.model);
  }
}
