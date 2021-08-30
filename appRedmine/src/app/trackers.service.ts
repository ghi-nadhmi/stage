import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackersService {

  constructor(private http:HttpClient) { }
  getAllTrackers( )
   {
    return this.http.get(" http://localhost:8090/myapp/trackers");
   }
}
