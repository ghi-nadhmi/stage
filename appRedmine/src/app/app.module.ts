import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProjectsComponent } from './projects/projects.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectByUserComponent } from './project-by-user/project-by-user.component';
import { TasksComponent } from './tasks/tasks.component';
import { MatTableModule } from '@angular/material/table'  
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrackerByprojectComponent } from './tracker-byproject/tracker-byproject.component'; 
 
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProjectsComponent,
    MembershipsComponent,
    UsersComponent,
    DashboardComponent,
    LoginComponent,
    ProjectByUserComponent,
    TasksComponent,
    TrackerByprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    BrowserAnimationsModule
   
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
