import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { IncrementalFormComponent } from './incremental-form/incremental-form.component';
import { IncrementalComponent } from './incremental/incremental.component';


@NgModule({
  declarations: [FormsComponent, SimpleFormComponent, IncrementalFormComponent, IncrementalComponent],
  imports: [
	CommonModule,
	FormsRoutingModule
  ]
})
export class FormsModule { }
