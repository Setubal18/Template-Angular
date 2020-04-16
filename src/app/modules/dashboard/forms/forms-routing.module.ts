import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { match } from 'assert';
import { FormsComponent } from './forms.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';


const routes: Routes = [
  	{
		path:'',
		pathMatch:'full',
		redirectTo:'forms'
  	},
  	{
		path:'',
		component: FormsComponent
  	},
  	{
		path:'simple-form',
		component: SimpleFormComponent
  	},
	{
		path:'imcremental-form',
		component: SimpleFormComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
