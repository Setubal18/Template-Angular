import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
	selector: 'app-incremental-form',
	templateUrl: './incremental-form.component.html',
	styleUrls: ['./incremental-form.component.styl']
})
export class IncrementalFormComponent implements OnInit {
	public itemsForm: FormGroup

	constructor(private fb: FormBuilder, ) { }

	ngOnInit(): void {
		this.initForm()
	}

	initForm() {
		this.itemsForm = this.fb.group({
			items: this.fb.array([ this.formItem ])
		})
	}

	get formItem() {
		return this.fb.group({
			name: new FormControl(),
			description: new FormControl()
		})
	}

	addItem(){
		this.itemsLista.push(this.formItem)
	}

	get itemsLista(){
		return this.itemsForm.controls.items as FormArray
	}

	removeItem(index:number){
		this.itemsLista.removeAt(index)
	}

}
