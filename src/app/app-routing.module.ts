import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeChild1Level1Component } from './home-child1-level1/home-child1-level1.component';
import { HomeChild2Level1Component } from './home-child2-level1/home-child2-level1.component';
import { HomeChild3Level1Component } from './home-child3-level1/home-child3-level1.component';
import { InvalidChildComponent } from './invalid-child/invalid-child.component';

const routes: Routes = [
  {path:'home', component:HomeComponent,
    children:[
      {path:'child1l1', component:HomeChild1Level1Component},
      {path:'child2l1', component:HomeChild2Level1Component},
      {path:'child3l1', component:HomeChild3Level1Component},
      {path:'*', component:InvalidChildComponent}
    ]
  },
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
