import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ActiveComponent } from './active/active.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ActiveComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports:[
    ActiveComponent
  ]
})
export class ActiveModule { }
