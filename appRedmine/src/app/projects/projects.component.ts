import { Component, OnInit } from '@angular/core';
import { DetailProjectService } from '../detail-project.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
   
  data:any;
  constructor(private project:ProjectService,private detail : DetailProjectService) { }

  ngOnInit(
    
  ): void {
    this.project.getProjects().subscribe((result)=>{
      console.log("result",result)
      this.data = result;

    },(err)=>{console.log(err)})
  }
  SetID(id:any){ this.detail.currentID=id };


  }
   

