import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { IncrementalComponent } from './incremental/incremental.component';
import { SelectedListFormComponent } from './selected-list-form/selected-list-form.component';


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
		path:'incremental',
		component: IncrementalComponent
	},
	{
		path: 'list-Selected',
		component:SelectedListFormComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
