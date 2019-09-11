import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAdHover]'
})
export class AdHoverDirective {

  @Input('appAdHover') highlightColor: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlightElement(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlightElement(null);
  }

  private highlightElement(color: string) {
    const clr = color || 'white';
    this.el.nativeElement.style.backgroundColor = clr;
  }

}
