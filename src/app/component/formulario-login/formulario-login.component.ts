import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent
{
  public usuario:Usuario
  constructor(private usuarioServicio: UsuarioService)
  {

  }

  public iniciarSesion(inputCorreo:string,inputPassword:string)
  {
    this.usuarioServicio.login(new Usuario(
      null,null,null,inputCorreo,inputPassword,null)).subscribe((data)=>{
        console.log(data);//por consola me pasa una array, pero no puedo usar métodos de array porque dice que es un objeto

      })


  }
}
