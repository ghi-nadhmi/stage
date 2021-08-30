import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  data:any;
  constructor(private project:ProjectService) { }

  ngOnInit(
    
  ): void {
    this.project.getProjects().subscribe((result)=>{
      console.log("result",result)
      this.data = result;

    },(err)=>{console.log(err)})
  }


}
