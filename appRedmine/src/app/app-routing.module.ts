import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { MenuComponent } from './menu/menu.component';
import { ProjectByUserComponent } from './project-by-user/project-by-user.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { TrackerByprojectComponent } from './tracker-byproject/tracker-byproject.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{path:"project",
component : ProjectsComponent ,
   },
 {path:"memberships",
 component : MembershipsComponent},
 
{path:"user",
component : UsersComponent,
},

{path:"menu",
component : MenuComponent ,
},
 
{path:"projectbyid",
component : ProjectByUserComponent,
},
 

{path:"",
component : LoginComponent,
},

{path:"dashboard",
component : DashboardComponent,
},
{path:"task",
component :  TasksComponent,
},
{path:"track",
component :  TrackerByprojectComponent,
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
