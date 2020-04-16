import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { IncrementalFormComponent } from './incremental-form/incremental-form.component';


@NgModule({
  declarations: [FormsComponent, SimpleFormComponent, IncrementalFormComponent],
  imports: [
	CommonModule,
	FormsRoutingModule
  ]
})
export class FormsModule { }
