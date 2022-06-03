import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponentComponent } from './Components/card-component/card-component.component';
import { JumbotronComponentComponent } from './Components/jumbotron-component/jumbotron-component.component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponentComponent,
    JumbotronComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
