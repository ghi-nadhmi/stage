import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
  constructor(private http:HttpClient) { }
  getusers( )
   {
    return this.http.get("http://localhost:8090/myapp/users" );
   }
}
