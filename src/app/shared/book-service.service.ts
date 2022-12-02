import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private libros: Libro[];  

  //los parámetros del constructor de los servicios no se toca.
  constructor() 
  {
    let newBook = new Libro("Cien años de soledad","Tapa dura","Gabriel García Márquez",10,"https://m.media-amazon.com/images/I/81rEWmLXliL.jpg",2);
    let newBook2 = new Libro("Drácula","Tapa blanda","Bram Stoker",15,"https://www.poemas-del-alma.com/blog/wp-content/uploads/2017/10/curiosidades-dracula-400x533.jpg",1);
    this.libros = [newBook,newBook2];
  }

  getAll():Libro[]{//Este método tiene que asociarse al componente libros
    console.log(this.libros);
    return this.libros
    
  }

  getOne(id_libro:number):Libro{//Este método tiene que asociarse al componente libros
    let foundBook:Libro;
    for (let i = 0; i < this.libros.length; i++) {
      if(id_libro == this.libros[i].id_libro){
        foundBook = this.libros[i]
      }
    }
    return foundBook
  }

  add(libro:Libro):void{//Este método tiene que asociarse al componente addBook
    console.log(this.libros)
    this.libros.push(libro)
  }

  edit(libro:Libro):boolean{//Este método tiene que asociarse al componente updateBook
    
  let findBook = this.libros.find(element => element.id_libro == libro.id_libro)
  let id_match = findBook != undefined;

  if(id_match == true){
    findBook.titulo = libro.titulo,
    findBook.tipoLibro = libro.tipoLibro,
    findBook.autor = libro.autor,
    findBook.precio = libro.precio,
    findBook.photo = libro.photo,
    findBook.id_usuario = libro.id_usuario

    let message = "Libro " + libro.id_libro + " modificado";
    console.log(message);
    console.log(findBook);
    

  }else{
    false;
    let message = "No existe ese libro."
    console.log(message);
    
  }
    return id_match
  }

  delete(id_libro:number):boolean{//Tiene que asociarse al componente libros
    let findId:number = this.libros.findIndex(element => element.id_libro == id_libro);
    let deleteOK:boolean = findId != -1;
    if(deleteOK){
      this.libros.splice(findId,1);
    }else{
      let message = "No existe ese libro"
      console.log(message);
    }
    return deleteOK
  }
}
