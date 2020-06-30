import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { IncrementalFormComponent } from './incremental-form/incremental-form.component';
import { IncrementalComponent } from './incremental/incremental.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { SelectedListFormComponent } from './selected-list-form/selected-list-form.component';


@NgModule({
  declarations: [
	  FormsComponent,
	  SimpleFormComponent,
	  IncrementalFormComponent,
	  IncrementalComponent,
	  SelectedListFormComponent],
  imports: [
	CommonModule,
	FormsRoutingModule,
	SharedModule
  ]
})
export class FormsModule { }
