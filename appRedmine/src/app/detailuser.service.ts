import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailuserService {
  currentID : any ;
  constructor(private http:HttpClient) { }
  getProjectByIDMemberships( )
   {
    return this.http.get("http://localhost:8090/myapp/users/"+this.currentID );
   }
   
}
