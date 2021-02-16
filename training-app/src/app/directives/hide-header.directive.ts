import {Directive, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[hide-header]',
    host: {
        '(ionScroll)': 'onContentScroll($event)'
    }
})
export class HideHeaderDirective implements OnInit {

    @Input() header: HTMLElement;
    @Input() subHeader: HTMLElement;

    private prevDeltaY = 0;
    private headerOpen = true;

    constructor(private renderer: Renderer2) {
    }

    ngOnInit() {
        this.renderer.setStyle(this.header, 'webkitTransition', 'top 300ms');
        this.renderer.setStyle(this.subHeader, 'webkitTransition', 'top 300ms');
    }

    onContentScroll(event: CustomEvent) {
        const deltaY = event.detail.deltaY;
        const diff = this.prevDeltaY - deltaY;
        if (diff < 0 && this.headerOpen) {
            this.hideHeader();
            this.headerOpen = false;
        } else if (diff > 0 && !this.headerOpen) {
            this.showHeader();
            this.headerOpen = true;
        }
        this.prevDeltaY = deltaY;
    }

    hideHeader() {
        this.renderer.setStyle(this.header, 'top', '-56px');
        this.renderer.setStyle(this.subHeader, 'top', '-56px');
    }

    showHeader() {
        this.renderer.setStyle(this.header, 'top', '0px');
        this.renderer.setStyle(this.subHeader, 'top', '0px');
    }
}
