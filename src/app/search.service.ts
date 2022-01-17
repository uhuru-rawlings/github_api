import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class SearchuserService {
  username = "";
  
 

  constructor(private http:HttpClient) { }
  
  getusers():Observable<any>{
    
    return this.http.get<any>("https://api.github.com/users/" + this.username )
  }
  getusername(users:string){
     this.username = users;
  }
}