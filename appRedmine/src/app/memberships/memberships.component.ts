import { Component, Input, OnInit } from '@angular/core';
import { DetailProjectService } from '../detail-project.service';
import { ProjectService } from '../project.service';
import { TrackersIDService } from '../trackers-id.service';
import { TrackersService } from '../trackers.service';

@Component({
  selector: 'app-memberships',
  templateUrl: './memberships.component.html',
  styleUrls: ['./memberships.component.css']
})
export class MembershipsComponent implements OnInit {
  id : any ;

  data:any;
  data1:any;
  data2:any ;
  constructor(private Detail : DetailProjectService , private project:ProjectService , private trackers :TrackersService,private trackerById :TrackersIDService) {  
   
  }

  ngOnInit(): void { 
    this.id = this.Detail.currentID;
    
    console.log(this.id) 
    this.project.getProjectByIDMemberships(this.id).subscribe((result)=>{
    console.log("result",result)
    this.data = result;
    
    },(err)=>{console.log(err)})
    this.project.getProjectsById(this.id).subscribe((result)=>{
      //console.log("result",result)
      this.data1 = result;
      console.log(this.data1[0].project.id)})
      this.trackers.getAllTrackers().subscribe((result)=>{
        console.log("result",result)
        this.data2 = result;})
     
  }
  SetID(id:any){this.trackerById.IDtrackers=id}

}
