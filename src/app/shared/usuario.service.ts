import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';//los objetos HttpClient son los que tienen los métodos post, get, put, delete

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url:string = "http://localhost:3000/"
  public logueado:boolean;

  //Clase usuario
  public usuario:Usuario;

  constructor(private http:HttpClient)
  {
    this.logueado = false;
  }

  public register(usuario:Usuario){//endpoint registro
    return this.http.post(this.url +"registro",usuario)//servicio llama a controlador back
  }

  public login(usuario:Usuario){//endpoint login
    return this.http.post(this.url + "login",usuario)//servicios llama a controlador back
  }

}
