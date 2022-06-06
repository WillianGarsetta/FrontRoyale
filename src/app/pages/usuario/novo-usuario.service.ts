import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http : HttpClient) { }

  saveUser(novoUsuario:Usuario){
    return this.http.post('http://localhost:8080/royale/account/create',novoUsuario);
  }

  verifyExistentUser(email : string){
    return this.http.get(`http://localhost:8080/royale/account/validate/${email}`);
  }


}
