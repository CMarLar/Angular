import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { BookServiceService } from 'src/app/shared/book-service.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {

  public libros:Libro[];//Declaras el atributo




  constructor(public libroService:BookServiceService){
    this.libros = this.libroService.getAll();//Das valor de array vacío.
    //Es la variable que utilizo para pintar y es la que tengo que modificar.
  

  }

//En la página de mostrar libros sobre el contenedor donde mostramos las cards, se debe
//maquetar un buscador, en caso que el buscador este vacío se deben mostrar todos los libros
//y sino el libro indicado por id_libro.



  public searchBooks(inputBookId:string){//los campos siempre devuelven strings
    if(inputBookId == ""){
      this.libros = this.libroService.getAll()
    }else{
      this.libros = [this.libroService.getOne(parseInt(inputBookId))]
    }
  }

  public deleteBook(inputBookId:number){
    let bookExists = this.libroService.delete(inputBookId)
    if(!bookExists){
      console.log("Eso no existe");
      
    }
  }

  ngOnInit():void{}
}
