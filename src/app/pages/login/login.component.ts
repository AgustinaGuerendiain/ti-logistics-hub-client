import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  
  usuario : Usuario = {
    id: 0,
    fullName: '',
    email : '',
    password: ''
  }
 
  constructor(private loginService : LoginService, private _router : Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  
  ingresar(){

    this.usuario = this.loginForm.value;

    this.loginService.login(this.usuario.email, this.usuario.password).subscribe( resp => {
      
      localStorage.setItem('UsuarioIn', JSON.stringify(this.usuario.email));
      localStorage.setItem('UsuarioId', JSON.stringify(resp.id));
      localStorage.setItem('UsuarioName', JSON.stringify(resp.fullName));

      let nombreUsuario = localStorage.getItem('UsuarioName');
      let email = localStorage.getItem('UsuarioIn');
      let id = localStorage.getItem('UsuarioId');

      this.loginForm.reset();

      this._router.navigateByUrl('/home');
      
    }, error => {

      this.loginForm.reset();
      console.log(error);

    });

  }


}
