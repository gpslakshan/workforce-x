import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appUploadProfPic]',
})
export class UploadProfPicDirective implements OnInit {

    uploadBtn: ElementRef;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) { }

    ngOnInit(): void {
        // this.elementRef.nativeElement.style.display = 'block';
        console.log(this.elementRef.nativeElement.children);
        this.uploadBtn = this.elementRef.nativeElement.children[2];
    }

    @HostListener('mouseenter') mouseEnter(eventData: Event) {
        this.renderer.setStyle(this.uploadBtn, 'display', 'block');
    }

    @HostListener('mouseleave') mouseLeave(eventData: Event) {
        this.renderer.setStyle(this.uploadBtn, 'display', 'none');
    }

}