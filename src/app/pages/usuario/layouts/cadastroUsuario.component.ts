import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../novo-usuario';
import { NovoUsuarioService } from '../novo-usuario.service';
import { UsuarioExisteService } from '../usuario-existe.service';
import { Perfil } from './perfil';
import { RoleServiceService } from './role.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './cadastroUsuario.component.html',
  styleUrls: ['./cadastroUsuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {
  novoUsuarioForm : FormGroup;
  // bread crumb items
  breadCrumbItems: Array<{}>;
  roleList: Perfil;


  constructor(private formBuilder: FormBuilder,private router : Router,private usuarioService : NovoUsuarioService, private existUser : UsuarioExisteService, private roles : RoleServiceService ) { }


  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Usuários' }, { label: 'Cadastro', active: true }];
    this.novoUsuarioForm = this.formBuilder.group({
      uuid: [''],
      email: ['',[Validators.required, Validators.email],[this.existUser.existUser()]],
      confirmaEmail:['',[Validators.required, Validators.email]],
      firstname: ['',[Validators.required,Validators.minLength(4)]],
      lastname: ['',[Validators.required,Validators.minLength(4)]],
      password: ['',[Validators.required]],
      validatePassword: ['',[Validators.required]],
      role: [''],
      blocked: new FormControl(false, []),
      emailAcesso: ['',[Validators.required, Validators.email]]

    },
    {
      validators: [this.emailIguais,this.senhasIguais],
    }
    )


    this.roles.getRoles().subscribe((data:Perfil)=>{
      this.roleList = data;
    })

  }

cadastrar(){
  if(this.novoUsuarioForm.valid)
    {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as Usuario;
      const senhaCriptografada = btoa(novoUsuario.password);
      novoUsuario.password = senhaCriptografada;
       this.usuarioService.saveUser(novoUsuario).subscribe(()=> {
      this.router.navigate(['/dashboard']);
      },
      (error)=>console.log(error)
      );
    }
}

emailIguais(formGroup : FormGroup){
  const email = formGroup.get('email')?.value ?? '';
  const confirmaEmail = formGroup.get('confirmaEmail')?.value ?? '';

  if(email.trim() + confirmaEmail.trim()){
    return email !== confirmaEmail ? {emailDiferente : true} : null;
  }else{
    return null;
  }

}

senhasIguais(formGroup : FormGroup){
  const senha = formGroup.get('password')?.value ?? '';
  const validaSenha = formGroup.get('validatePassword')?.value ?? '';


  if(senha.trim() + validaSenha.trim()){
    return senha !== validaSenha ? {senhaDiferente : true} : null;
  }else{
    return null;
  }

}

}
