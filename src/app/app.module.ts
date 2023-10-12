import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HomeChild1Level1Component } from './home-child1-level1/home-child1-level1.component';
import { HomeChild2Level1Component } from './home-child2-level1/home-child2-level1.component';
import { HomeChild3Level1Component } from './home-child3-level1/home-child3-level1.component';
import { HomeChild1Level2Component } from './home-child1-level2/home-child1-level2.component';
import { HomeChild2Level2Component } from './home-child2-level2/home-child2-level2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InvalidChildComponent } from './invalid-child/invalid-child.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    HomeChild1Level1Component,
    HomeChild2Level1Component,
    HomeChild3Level1Component,
    HomeChild1Level2Component,
    HomeChild2Level2Component,
    InvalidChildComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
