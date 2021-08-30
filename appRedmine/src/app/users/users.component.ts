import { not, variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DetailProjectService } from '../detail-project.service';
import { DetailuserService } from '../detailuser.service';
import { ProjectByUserComponent } from '../project-by-user/project-by-user.component';
import { ProjectService } from '../project.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // data1: any;
  data: any;
  // element: any;
  // c:any
  // users = [] as any;
  // L = [] as any;
  // utilisateurs = new Map() as any;
  constructor(private Allusers : UsersService, private userdetail:DetailuserService) { }
  ngOnInit(): void {
    this.Allusers.getusers().subscribe((result) => {
   console.log("result", result)
          this.data = result;
        
        
        })
  // constructor(private project: ProjectService, private userdetail:DetailuserService ) { }

  // ngOnInit(): void {
  //   this.project.getProjects().subscribe((result) => {
  //     //console.log("result", result)
  //     this.data = result;
  //     for (let i = 0; i < this.data[0].projects.length; i++) {
  //       this.project.getProjectByIDMemberships((this.data[0].projects[i].id)).subscribe((result1) => {
  //         //console.log("result", result1)
  //         this.data1 = result1;
  //         // console.log(this.data1[0].memberships[0].id)
  //         for (let j = 0; j < this.data1[0].memberships.length; j++) {
  //         //  console.log(this.data1[0].memberships[j].user.id);
           
  //          const p ={id :this.data1[0].memberships[j].user.id,name :this.data1[0].memberships[j].user.name}
  //          // var obj = this.data1[0].memberships[j].user.id;
  //          { this.users.push(p); }
  //         }
  //         this.L = [...new Set(this.users)]
  //         //console.log(this.L);
  //         for (let j = 0; j < this.L.length; j++) {
  //           this.project.getProjects().subscribe((result) => {
  //             //console.log("result", result)
  //             this.utilisateurs = result
            
  //           })
  //         }
                          
  //       })
        
  //     }
       
      
      
  //   }, (err) => { console.log(err) })
    
  
    
     



  // }

  //  getdetailuser(id:any):void{
  //   this.project.getuserByID(id).subscribe((result) => {
   
  //   this.element =result;
  //   //console.log(result);
    
  //   this.c =  String(this.element[0].user.firstname)+"  "+String(this.element[0].user.lastname)  ;
  //   // return(this.c )
  //  })
  //  return(this.c )
   

  }

   SetID(id:any){ this.userdetail.currentID=id };

}
