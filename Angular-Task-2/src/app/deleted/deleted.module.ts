import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DeletedComponent } from './deleted/deleted.component';



@NgModule({
  declarations:[
    DeletedComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[SharedModule]
})

export class DeletedModule { }
