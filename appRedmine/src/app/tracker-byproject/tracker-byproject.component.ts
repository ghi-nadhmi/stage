import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DetailProjectService } from '../detail-project.service';
import { ProjectService } from '../project.service';
import { ProjectbyIdService } from '../projectby-id.service';
import { TrackersIDService } from '../trackers-id.service';
@Component({
  selector: 'app-tracker-byproject',
  templateUrl: './tracker-byproject.component.html',
  styleUrls: ['./tracker-byproject.component.css']
})
export class TrackerByprojectComponent implements OnInit {
   
  IDT: any;
  IDp: any;
  data: any;
  nb=0 ;
  n =0;
  constructor(private issues :ProjectService,private Detail :DetailProjectService,private track1 :TrackersIDService) {Chart.register(...registerables) }
  
  ngOnInit(): void {
   
  this.IDp = this.Detail.currentID;
     
  this.IDT = this.track1.IDtrackers ;
     
    this.issues.getIssues().subscribe((result) => {
      console.log("result", result)
      this.data = result;
      for (let i = 0; i < this.data[0].issues.length; i++) {
      if(this.data[0].issues[i].project.id==this.IDp  )
       {  this.nb = this.nb+1 ;
          if(this.data[0].issues[i].tracker.id==this.IDT)
            {this.n=this.n+1 }
       }
      }
      var myChart = new Chart("myChart", {
        type: 'bar',
        data: {
          labels: ['ID user '+String(this.IDT) ],
          datasets: [{
            label: '# participation in project '+String(this.IDp),
            data: [this.n*100/this.nb ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
               
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
               
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }, (err) => { console.log(err) })
  } ;
  

}
  


