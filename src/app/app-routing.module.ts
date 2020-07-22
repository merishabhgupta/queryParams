import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteComponentAComponent } from './route-component-a/route-component-a.component';
import { AppComponent } from './app.component';
import { RouteComponentBComponent } from './route-component-b/route-component-b.component';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "routeA"
  },
  {
    path: "routeA",
    component: RouteComponentAComponent
  },
  {
    path:"routeB",
    component: RouteComponentBComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
