import { Component, OnInit } from '@angular/core';
import { delay } from 'q'

@Component({
	selector: 'app-selected-list-form',
	templateUrl: './selected-list-form.component.html',
	styleUrls: ['./selected-list-form.component.styl']
})
export class SelectedListFormComponent implements OnInit {

	public listaDisponiveis: Array<any> = []
	public listaSelecionada: Array<any> = []
	public lista: Array<any> = []

	public add = false
	public remove = false


	constructor() {
		this.listaDisponiveis = [{
			'name': 'Item 1'
		},
		{
			'name': 'Item 2'
		},
		{
			'name': 'Item 3'
		},
		{
			'name': 'Item 4'
		},
		{
			'name': 'Item 5'
		},
		{
			'name': 'Item 6'
		},
		{
			'name': 'Item 7'
		},
		{
			'name': 'Item 8'
		},
		{
			'name': 'Item 9'
		},
		]
	}

	ngOnInit(): void {
	}

	adicionaItem(item:any,index:number){
		console.log(item,index)
		this.add = true
		this.listaSelecionada.push(item)
		this.listaDisponiveis.splice(index,1)
		this.add = false
	}

	removeItem(item:any, index: number) {
		console.log(item, index)
		this.remove = true
		this.listaDisponiveis.push(item)
		this.listaSelecionada.splice(index, 1)
		this.remove = false
	}

}
