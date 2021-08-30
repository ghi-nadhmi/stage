import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url="http://localhost:8090/myapp/projects"
  url1="http://localhost:8090/myapp/projects/"
   
    constructor(private http:HttpClient) { }
    getProjects()
    {
      return this.http.get(this.url);
    }
   getProjectsById(id:any)
   {
    return this.http.get(this.url1+id);
   }
   getProjectByIDMemberships(id:any)
   {
    return this.http.get("http://localhost:8090/myapp/projects/"+id+"/memberships");
   }
   getuserByID(id:any)
   {
    return this.http.get("http://localhost:8090/myapp/users/"+id);
   }
   getIssues()
    {
      return this.http.get("http://localhost:8090/myapp/issues");
    }
}
