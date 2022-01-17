import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetuserService {
  tocken = "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";
  access = "?access_token=";
  constructor(private http:HttpClient) { }
  
  getusers():Observable<any>{
    const url= "https://api.github.com/users"
    return this.http.get<any>(url)
  }
}
