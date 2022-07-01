import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageRoutingModule } from './manage-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ManageComponent } from './manage.component';
import { UserDetailsComponent } from '../user-details/user-details.component';



@NgModule({
  declarations: [    
    ManageComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ManageRoutingModule
  ],

})
export class ManageModule { }
