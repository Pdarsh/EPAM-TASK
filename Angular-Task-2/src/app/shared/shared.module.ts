import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';
import { UserListComponent } from '../user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../users.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [   
    HomeComponent,
    UserComponent,
    UserListComponent,
  ],
  providers:[UsersService]
})
export class SharedModule { }
