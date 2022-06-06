import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor(private http: HttpClient) { }

  getRoles(){
    return this.http.get('http://localhost:8080/royale/role/list');
  }

}
