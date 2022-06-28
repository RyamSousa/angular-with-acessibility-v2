import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { fade } from "./shared/animations/fade";
import { ModalRef } from "./shared/components/modal/models/modal-ref";
import { ModalService } from "./shared/components/modal/services/modal.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	animations: [fade],
})
export class AppComponent implements OnInit {
	@ViewChild("modal") public modalTemplateRef: TemplateRef<any>;
	public firstName = "Ryam";
	public modalRef: ModalRef;
	public info = false;
	public form: FormGroup;
	title = "a11y-p2";

	constructor(private modalService: ModalService, private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			firstName: ["Flávio", Validators.required],
			surname: ["", Validators.required],
			age: ["", Validators.required],
			info: [false],
		});
	}

	public show() {
		this.modalRef = this.modalService.open({
			templateRef: this.modalTemplateRef,
			title: "User Details",
		});
	}

	public submit(): void {
		this.modalRef.close();
	}
}
