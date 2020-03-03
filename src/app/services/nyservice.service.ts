import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs' 
@Injectable({
  providedIn: 'root'
})
export class NYServiceService { 

  constructor(private http: HttpClient) { } 
  
  getNYArticles():Observable<any>{ 
    
    try {
      return this.http.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=SbZQXFNfcJpr3I0YtvMGISxPKb9oBuAk`);
  
     }
     catch (error) {
      return error;
     }


 }

}
