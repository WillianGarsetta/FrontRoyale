import { Component, OnInit } from '@angular/core';
import { Usuario } from '../novo-usuario';
import { ListaUsuarioService } from './lista-usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.scss']
})
export class ListaUsuarioComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  usuarioList: Usuario;

  constructor(private listaUsuario :ListaUsuarioService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Usuários' }, { label: 'Lista', active: true }];
    this.listaUsuario.getListaUsuario().subscribe((data:Usuario)=>{

      this.usuarioList = data;

      console.log(this.usuarioList);
    })

  }

}
