import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';
import { NovoUsuarioService } from './novo-usuario.service';
@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService: NovoUsuarioService) { }

existUser(){
  return (control:AbstractControl)=>{
    return control.valueChanges.pipe(
      switchMap((email)=>this.novoUsuarioService.verifyExistentUser(email)
      ),
      map((usuarioExiste)=> usuarioExiste ? {usuarioExistente: true} : null
      ),
      first()
    );
  };
}

}
