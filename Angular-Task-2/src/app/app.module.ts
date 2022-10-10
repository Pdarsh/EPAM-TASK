import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ActiveModule } from './active/active.module';
import { DeletedModule } from './deleted/deleted.module';
import { FormsModule } from '@angular/forms';
import { ManageModule } from './manage/manage.module';
import { RouterModule } from '@angular/router';
import { ManageRoutingModule } from './manage/manage-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ActiveModule,
    DeletedModule,
    RouterModule,
    ManageModule,
    ManageRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
