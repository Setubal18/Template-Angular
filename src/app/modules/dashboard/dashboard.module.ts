import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SubMenuComponent } from 'src/app/core/components/sub-menu/sub-menu.component';


@NgModule({
	declarations: [DashboardComponent, SubMenuComponent
	],
	imports: [
		CommonModule,
		DashboardRoutingModule
	]
})
export class DashboardModule { }
