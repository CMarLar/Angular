import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//Import para toastr:
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/shared/usuario.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent {

  //Metemos la clase que hemos creado:
  public newUser:Usuario

  //Definimos variable que recoja los hidden del html
  public isHidden:boolean 

  //Definimos texto del mensaje
  public message:string

  //Definimos variable para css del mensaje
  public hiddenStyle:string

  //Construimos un objeto dentro de la clase que es este mismo archivo (los componentes son componentes y clases a la vez):
  constructor(public usuario:UsuarioService, private toastr: ToastrService){
    console.log(this.usuario.usuario)
    // this.newUser = new Usuario(1,"Manuel","Martín Pérez","manuel@martin.com","password123","")
    this.newUser = this.usuario.usuario// igualo al usuario logueado.

    //CADA VEZ QUE NECESITE ALGO DEL USUARIO LOGUEADO, DESDE SERVICE
    this.isHidden = true;
    this.message = "Mensaje"
  }

    //función a la que llama el html
  public modifyData(
    inputName:string,
    inputSurname:string,
    inputMail:string,
    inputURL:string)
    {
      //BLOQUE para que no cambie a "" los inputs vacíos
      if(inputName == ""){inputName = this.newUser.nombre}
      if(inputSurname == ""){inputSurname = this.newUser.apellidos}
      if(inputMail == ""){inputMail = this.newUser.correo}
      if(inputURL == ""){inputURL = this.newUser.foto}
      //

      if(inputName == "" &&
      inputSurname == "" &&
      inputMail== "" &&
      inputURL== ""){
        this.isHidden=false;
        this.message="No se han detectado cambios";
        this.hiddenStyle="fail";
      }else{
        this.isHidden=false;
        this.message="Usuario modificado";
        this.hiddenStyle="success";
      }

      this.newUser.modifyUser(
        inputName,
        inputSurname,
        inputMail,
        inputURL)
      console.log(this.newUser);
    
    // this.showSuccess()
    }

    showSuccess() {//función de toast, no se usa
      this.toastr.success('Hello world!', 'Toastr fun!');
    }


  ngOnInit():void{}
}
