import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Router } from '@angular/router';//importamos para utilizar navigate y navigateURL.

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent
{
  public usuario:Usuario
  constructor(
    public usuarioServicio: UsuarioService,
    private router:Router)//Para utilizar navigate y navigateURL
  {}

  public redirect():void{
    this.router.navigate(["/libros"])
  }

  public iniciarSesion(inputCorreo:string,inputPassword:string)
  {
    this.usuarioServicio.login(new Usuario(
      null,null,null,inputCorreo,inputPassword,null)).subscribe((data:Usuario[])=>{//indicamos que el data es un array de objetos Usuario...
        console.log(data.length);//para poder usar .length más abajo y hacer la verificación de contraseña.

        if(data.length > 0){
          this.usuarioServicio.logueado = true;
          this.usuarioServicio.usuario = new Usuario(
            data[0].id_usuario,
            data[0].nombre,
            data[0].apellidos,
            data[0].correo,
            data[0].password,
            data[0].foto)
          console.log("Login correcto");
          console.log(this.usuarioServicio.logueado);
          
          this.redirect();
          
        }else{
          console.log("Usuario y/o contraseña incorrecto");
          console.log(this.usuarioServicio.logueado);
          
        }
      })
  }
}
