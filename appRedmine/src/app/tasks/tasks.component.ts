import { Component, OnInit } from '@angular/core';
import { DetailuserService } from '../detailuser.service';
import { ProjectService } from '../project.service';
import { ProjectbyIdService } from '../projectby-id.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  IDu: any;
  IDp: any;
  data: any;
  nb=0 ;
  n =0;
  constructor(private Detail: DetailuserService, private ProjectByUser: ProjectbyIdService, private issues: ProjectService,) { Chart.register(...registerables)}


  ngOnInit(): void {
    
    this.IDu = this.Detail.currentID;
    console.log(this.IDu);
    this.IDp = this.ProjectByUser.currentID;
    console.log(this.IDp);
    this.issues.getIssues().subscribe((result) => {
      console.log("result", result)
      this.data = result;
      for (let i = 0; i < this.data[0].issues.length; i++) {
      if(this.data[0].issues[i].project.id==this.IDp  )
       {  this.nb = this.nb+1 ;
          if(this.data[0].issues[i].assigned_to.id==this.IDu)
            {this.n=this.n+1 }
       }
      }
      var myChart = new Chart("myChart", {
        type: 'bar',
        data: {
          labels: ['ID user '+String(this.IDu) ],
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
