import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {

    @Input()
    public placeholder: string = '';

    @Input()
    public value: string = '';

    @Output()
    public onValue = new EventEmitter<string>();

    emitValue(value: string) {
      this.onValue.emit(value);
    }

    ngOnInit(): void {
      if (this.value !== ''){
        this.emitValue(this.value)
      }
    }

}
