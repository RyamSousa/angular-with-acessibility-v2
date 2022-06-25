import { Component, TemplateRef, ViewChild } from "@angular/core";
import { ModalRef, ModalService } from "./shared/components/modal/services/modal.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	@ViewChild("modal") public modalTemplateRef: TemplateRef<any>;
	public firstName = "Ryam";
	public modalRef: ModalRef;
	title = "a11y-p2";

	constructor(private modalService: ModalService) {}

	public show() {
		this.modalRef = this.modalService.open({
			templateRef: this.modalTemplateRef,
			title: "User Details",
		});
	}
}
