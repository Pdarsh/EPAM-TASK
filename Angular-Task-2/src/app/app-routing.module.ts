import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveComponent } from './active/active/active.component';
import { DeletedComponent } from './deleted/deleted/deleted.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',redirectTo: 'home',pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'active', component:ActiveComponent},
  {path:'deleted', component:DeletedComponent},
  {path:'manage', loadChildren: () => import('./manage/manage.module').then(m => m.ManageModule)},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
