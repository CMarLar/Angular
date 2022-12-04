import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { BookServiceService } from 'src/app/shared/book-service.service';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent {
  constructor(public libroService:BookServiceService, public usuarioService: UsuarioService, public router: Router){}

  public redirect(){
    this.router.navigate(["/libros"])
  }

  public modifyBook(
    inputTitle:string,
    inputType:string,
    inputAuthor:string,
    inputPrice:number,
    inputCover:string,
    inputBookId:number)
    {
      this.libroService.editOneBook(new Libro(inputBookId,this.usuarioService.usuario.id_usuario,inputTitle,inputType,inputAuthor,inputPrice,inputCover)).subscribe((data) =>{
        console.log(data)

    

        this.redirect();
      })
    }
}


/**
 * 
 * 
 var a = { titulo: 'Crimen y castigo', id_libro: 9 };
 var b = Object.keys(a);
 var c = Object.values(a);

 console.log(b) // ['titulo, 'id_libro']
 console.log(c) // ['Crimen y castigo, 9]
 */