import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaUsuarioService {

  constructor(private http : HttpClient) { }


  getListaUsuario(){
    return this.http.get("http://localhost:8080/royale/account/list");
  }

  deleteUsuario(uuid:string){
    //const token = this.tokenService.retornaToken();
   // const headers = new HttpHeaders().append('x-access-token',token);
    return this.http.get(`http://localhost:8080/royale/account/delete/{${uuid}}`,{
    //  headers,
    })
  }

}
