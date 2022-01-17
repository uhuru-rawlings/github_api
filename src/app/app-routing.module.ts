import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { UsersComponent } from './users/users.component';
import { LandingComponent } from './landing/landing.component';
const routes: Routes = [
  {path: "",component: LandingComponent},
  {path: "users",component: FormComponent},
  {path: "repos",component: AboutComponent},
  {path: "github-user",component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomponents = [LandingComponent,FormComponent,AboutComponent,UsersComponent]