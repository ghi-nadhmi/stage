import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { AcueilComponent } from './acueil/acueil.component';
import { LoginComponent } from './login/login.component';
 
 
@NgModule({
  declarations: [

    AppComponent,
    MenuComponent,
    ProjectsComponent,
    UsersComponent,
    DashboardComponent,
    MembershipsComponent,
    AcueilComponent,
    LoginComponent,
  
    
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
