import { Component, OnInit } from '@angular/core';
import { RenderizarMenusService } from 'src/app/shared/services/renderizar-menus.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SubMenu } from '../class/subMenu';

@Component({
	selector: 'app-sub-menu',
	templateUrl: './sub-menu.component.html',
	styleUrls: ['./sub-menu.component.styl']
})
export class SubMenuComponent implements OnInit {

	public menus: any
	public menuAtual: any
	// tslint:disable-next-line: new-parens
	public subMenu: SubMenu = new SubMenu()
	constructor(
		private rendereMenusService: RenderizarMenusService,
		private router: Router,
		private route: ActivatedRoute,
	) { }

	ngOnInit(): void {
		this.atualizaRota()

	}

	atualizaRota() {
		this.rendereMenusService.rotaAtualizada
			.subscribe((rota: string) => {
				const menu = this.subMenu.subMenu[rota]
				this.menuAtual = menu()
			})
	}

}
