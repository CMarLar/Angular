import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { BookServiceService } from 'src/app/shared/book-service.service';
import { UsuarioService } from 'src/app/shared/usuario.service';//para sacar los libros de un usuario

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {

  public libros:Libro[];//Declaras el atributo




  constructor(public libroService:BookServiceService, public usuarioService:UsuarioService){
    this.libros = [];//Das valor de array vacío.
    //Es la variable que utilizo para pintar y es la que tengo que modificar.
  

  }


//CON SERVICIO



//ANTIGUAS

//En la página de mostrar libros sobre el contenedor donde mostramos las cards, se debe
//maquetar un buscador, en caso que el buscador este vacío se deben mostrar todos los libros
//y sino el libro indicado por id_libro.

  public searchBooks(inputBookId:string){//los campos siempre devuelven strings
    if(inputBookId == ""){
      this.libroService.getAllBooks(this.usuarioService.usuario.id_usuario)//coge el id del usuario logueado
      .subscribe((data: Libro[]) =>{//data es el mismo tipo que el observable que viene de la api
        this.libros = data;
      })
    }else{
      this.libroService.getOneBook(this.usuarioService.usuario.id_usuario,parseInt(inputBookId))
      .subscribe((data: Libro[]) =>{
        this.libros = data;
      })
      // this.libros = [this.libroService.getOne(parseInt(inputBookId))]
    }
  }


  public deleteBook(inputBookId:number){
    
    this.libroService.deleteOneBook(inputBookId).subscribe((data: any) =>{//data:any para poder hacer lo de abajo
      if(data.affectedRows > 0){
        console.log(data.affectedRows);//forma alternativa de mostrar parte interesante del data
        this.searchBooks("")//para mostrar de nuevo todos los libros
      }else{
        console.log("El libro no existe");
      }
    })
 
  }

  ngOnInit():void{}
}
