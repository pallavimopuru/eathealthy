import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  elRef: any;
  role: string;
  @Input()defaultColor:string='orange';
  @Input()hilghlightColor:string='pink';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private renderer:Renderer2,private elementRef:ElementRef) { }

ngOnInit(): void {
 //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
this.backgroundColor=this.hilghlightColor;
}

@HostListener('mouseover')
  onMouseOver() {
     //this.renderer.setStyle(this.elementRef.nativeElement, 'border', '5px solid green');
     this.backgroundColor = this.hilghlightColor;
    //  this.backgroundColor = '5px solid black';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'border', '');
     this.backgroundColor = this.defaultColor;

  }
}
