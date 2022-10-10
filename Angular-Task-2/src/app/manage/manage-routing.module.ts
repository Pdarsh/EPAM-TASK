import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { ManageComponent } from './manage.component';


const routes: Routes = [{ path: '', component: ManageComponent,
children: [
  {
    path:':id', component: UserDetailsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }