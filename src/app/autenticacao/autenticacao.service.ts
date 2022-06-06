import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient : HttpClient , private usuarioService:UsuarioService) { }

  autenticar(usuario:string, senha:string): Observable<HttpResponse<any>>{
    return this.httpClient.post('http://localhost:8080/royale/account/auth',{
      user: usuario,
      password: senha
    },
    {observe:'response' }
    ).pipe(
      tap((res)=> {
        const authToken = res.headers.get("X-Access-Token") ?? '';

        console.log("token " + authToken);
       this.usuarioService.salvaToken(authToken);
      })
    )
  }
}
