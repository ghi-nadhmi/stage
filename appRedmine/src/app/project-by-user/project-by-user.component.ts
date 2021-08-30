import { Component, OnInit } from '@angular/core';
import { DetailuserService } from '../detailuser.service';
import { ProjectService } from '../project.service';
import { ProjectbyIdService } from '../projectby-id.service';

@Component({
  selector: 'app-project-by-user',
  templateUrl: './project-by-user.component.html',
  styleUrls: ['./project-by-user.component.css']
})
export class ProjectByUserComponent implements OnInit {

  id : any ;
  data:any;
  data1 :any ;
  element :any ;
  users = [] as any;
  c :any ;
  constructor(private Detail : DetailuserService,private project:ProjectService ,private ProjectById : ProjectbyIdService) {  
   
  }

  ngOnInit(): void { 
    this.id = this.Detail.currentID;
   
    this.project.getProjects().subscribe((result)=>{
       
      this.data = result;
       
      for (let i = 0; i < this.data[0].projects.length; i++) {
        this.project.getProjectByIDMemberships((this.data[0].projects[i].id)).subscribe((result1) => {
          this.data1 = result1 ;
          for (let j = 0; j < this.data1[0].memberships.length; j++) {
            var obj = this.data1[0].memberships[j].user.id;
            if (obj==this.id)
            { const p ={id :this.data[0].projects[i].id,name :this.data[0].projects[i].name}
              this.users.push(p )}
           
          }
         
        })  
      }
      

    })  
     
     
        
     
  }
  
  SetIDproject(id:any){ this.ProjectById.currentID=id };  
  
}

