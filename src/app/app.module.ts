import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteComponentAComponent } from './route-component-a/route-component-a.component';
import { RouteComponentBComponent } from './route-component-b/route-component-b.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteComponentAComponent,
    RouteComponentBComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
