import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';

import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login component
 */
export class LoginComponent implements OnInit {

  //loginForm: FormGroup;
  submitted = false;
  error = '';
  returnUrl: string;

  usuario = '';
  senha = '';

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private router: Router,
    private authService:AutenticacaoService) { }

  ngOnInit() {
  }

  // convenience getter for easy access to form fields
 // get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onSubmit(): void{

  }
  login(){
    this.authService.autenticar(this.usuario,btoa(this.senha)).subscribe(()=>{

      this.router.navigate(['/dashboard'])
    },(error)=>{
      console.log(error);
      alert("Usuário ou senha invalidos");

    });
  }
}
