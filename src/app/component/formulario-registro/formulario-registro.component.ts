import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent 
{
  public usuario:Usuario

  constructor(private usuarioServicio: UsuarioService)
  {

  }

  public registerUser(
    inputNombre:string,
    inputApellidos:string,
    inputCorreo:string,
    inputPassword:string,
    inputConfirmPassword:string,
    inputUrl:string,
  )
  {
    if(inputPassword == inputConfirmPassword){

      this.usuarioServicio.register(new Usuario(
        0,//para no pisar el id_usuario en sql
        inputNombre,
        inputApellidos,
        inputCorreo,
        inputPassword,
        inputUrl)).subscribe((data)=>{console.log(data);
        })

    }else{
        console.log("Las contraseñas no coinciden");
        
    }
  }



  
}
