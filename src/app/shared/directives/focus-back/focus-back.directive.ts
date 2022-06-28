import { Directive, OnDestroy, OnInit } from "@angular/core";

@Directive({
	selector: "[appFocusBack]",
})
export class FocusBackDirective implements OnInit, OnDestroy {
	private lastFocusableElement: Element = null;

	public ngOnInit(): void {
		this.lastFocusableElement = document.activeElement;
	}

	ngOnDestroy(): void {
		(this.lastFocusableElement as HTMLElement).focus();
	}
}
