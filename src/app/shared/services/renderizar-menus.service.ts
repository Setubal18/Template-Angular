import { Injectable, Output, EventEmitter } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs/operators'
import { delay } from 'q'
@Injectable({
	providedIn: 'root'
})
export class RenderizarMenusService {
	@Output() rotaAtualizada: EventEmitter<string> = new EventEmitter()
	constructor(
		private router: Router
	) {
		router.events.pipe(
			filter((event) => event instanceof NavigationEnd)
		)
			.subscribe(async (event: NavigationEnd) => {
				let rotaAtualizada: string = event.url.split('/')[2]
				if (rotaAtualizada === undefined) { rotaAtualizada = 'dashboard' }
				await delay(0.5)
				this.disparaRotaAtualizada(rotaAtualizada)
			})
	}

	disparaRotaAtualizada(rotaAtualizada: string) {
		this.rotaAtualizada.emit(rotaAtualizada)
	}
}
