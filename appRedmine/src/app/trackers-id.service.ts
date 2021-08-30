import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackersIDService {

   IDtrackers : any ;
   
   constructor(private http:HttpClient) { }
   getAllTrackers( )
    {
     return this.http.get(" http://localhost:8090/myapp/trackers");
    }
}
