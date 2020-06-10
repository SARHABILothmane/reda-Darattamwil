import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  constructor(private http:HttpClient) { }
  getActualites(){
    return this.http.get<any>(`${environment.apiUrl}/api/actualite/actualites`)
}
getOneActualite(id){
 return this.http.get<any>(`${environment.apiUrl}/api/actualites/${id}`)
}
}
