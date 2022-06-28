import { Component, TemplateRef, ViewChild } from "@angular/core";
import { fade } from "./shared/animations/fade";
import { ModalRef } from "./shared/components/modal/models/modal-ref";
import { ModalService } from "./shared/components/modal/services/modal.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	animations: [fade],
})
export class AppComponent {
	@ViewChild("modal") public modalTemplateRef: TemplateRef<any>;
	public firstName = "Ryam";
	public modalRef: ModalRef;
	public info = false;
	title = "a11y-p2";

	constructor(private modalService: ModalService) {}

	public show() {
		this.modalRef = this.modalService.open({
			templateRef: this.modalTemplateRef,
			title: "User Details",
		});
	}
}
