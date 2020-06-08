import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[singleDigitOnly]'
})
export class SingleDigitOnlyDirective {
    constructor(public el: ElementRef) {
    }

    @HostListener('input', ['$event']) onInputChange(event) {
        const initalValue = this.el.nativeElement.value;
        this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        if (initalValue !== this.el.nativeElement.value) {
            event.stopPropagation();
        }
    }

}