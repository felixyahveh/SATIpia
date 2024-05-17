import { Component } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { NotificacionService } from '../../../services/notificacion.service';
import { Router } from '@angular/router';
import { loginDTO } from '../../../Models/LoginDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  protected login:loginDTO = {
    contrasena: '',
    nombreUsuario:''
  };
  protected img:string = 'https://lasallelaguna.mx/wp-content/uploads/2018/08/carreras_lasallelaguna_musica-1170x750.jpg';
  protected imgLogo:string= 'https://cdn-icons-png.flaticon.com/512/2792/2792315.png';

  constructor(private usuarioService:UsuarioService,
              private notificacionService:NotificacionService,
              private router:Router,
              )
  {}
  iniciarSesion(){
    this.usuarioService.IniciarSesion(this.login).subscribe(res => {
      localStorage.setItem('id',res[0].id.toString());
      this.notificacionService.addSuccess('Inicio de sesión','Se ha iniciado la sesión exitosamente');
      this.router.navigate(['/aplicacion/inicio']);
    }, err=> {
      this.notificacionService.addDanger('Error','El usuario o contraseña deben ser incorrectos')

    })
  }

}
