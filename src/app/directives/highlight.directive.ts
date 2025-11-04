import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]', // 1. O seletor PRECISA ter os colchetes []
  standalone: true
})
export class HighlightDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter') onMouseEnter() {
    // 2. Garanta que 'lime' está com aspas simples corretas
    this.mudarCorDeFundo('#f5f5f5'); 
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.mudarCorDeFundo(null);
  }

  private mudarCorDeFundo(color: string | null) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      color
    );
  }
}