import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcueilComponent } from './acueil/acueil.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
 
import { MembershipsComponent } from './memberships/memberships.component';
import { MenuComponent } from './menu/menu.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{path:"project",
                     component : ProjectsComponent ,
                        },
                      {path:"memberships",
                      component : MembershipsComponent},
                      
                     {path:"user",
                     component : UsersComponent ,
                     },
                     
                    {path:"menu",
                     component : MenuComponent ,
                     },
                      
                     
                     {path:"accueil",
                     component : AcueilComponent ,
                     },
                    
                     {path:"",
                     component : LoginComponent,
                     },
                    
                     {path:"dashboard",
                     component : DashboardComponent,
                     }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
