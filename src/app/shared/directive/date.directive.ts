import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDate]',
})
export class DateDirective implements OnInit {
  @Input() public appDate: number;

  public red: string = '#e60023';
  public blue: string = '#3865c7';
  public green: string = '#049b1d';
  public yellow: string = '#eed028';

  constructor(private el: ElementRef) {}

  public ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.setColor(this.appDate);
  }

  public setColor(diff: number): string {
    if (diff < 7) {
      return this.blue;
    }

    if (diff < 30) {
      return this.green;
    }

    if (diff < 182) {
      return this.yellow;
    }

    return this.red;
  }
}
