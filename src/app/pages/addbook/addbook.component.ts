import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
//importamos los servicios
import { BookServiceService } from 'src/app/shared/book-service.service';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  constructor(public libroService: BookServiceService, public usuarioService: UsuarioService, public router: Router){}

  public redirect(){
    this.router.navigate(["/libros"])
  }

  public addBook(
    inputTitle:string,
    inputType:string,
    inputAuthor:string,
    inputPrice:number,
    inputCover:string)
    {
      const libro = new Libro(null, this.usuarioService.usuario.id_usuario,inputTitle,inputType,inputAuthor,inputPrice,inputCover)
      this.libroService.addOneBook(libro).subscribe((data) => {
        console.log(data);     
        
      this.redirect()

      })
    }


  
}
