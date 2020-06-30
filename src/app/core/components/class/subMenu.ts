export class SubMenu {
	subMenu = {
		forms() {
			return {
				title: 'Formularios',
				item: [
					{
						label: 'Formulario Simples',
						icone: 'fas fa-users',
						rota: '/dashboard/forms/simple-form'
					},
					{
						label: 'Incremental Form',
						icone: 'fas fa-plus',
						rota: '/dashboard/forms/incremental'
					},
					{
						label: 'Formularios Lista Incremental',
						icone: 'fas fa-list',
						rota: '/dashboard/forms/list-Selected'
					}
				]
			}
		},
	}
}
