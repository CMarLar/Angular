import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {

  public libros:Libro[];

  public newBook:Libro;
  public newBook2:Libro;

  constructor(){
    this.newBook = new Libro("Cien años de soledad","Tapa dura","Gabriel García Márquez",10,"https://m.media-amazon.com/images/I/81rEWmLXliL.jpg",2);
    this.newBook2 = new Libro("Drácula","Tapa blanda","Bram Stoker",15,"https://www.poemas-del-alma.com/blog/wp-content/uploads/2017/10/curiosidades-dracula-400x533.jpg",1);
    this.libros = [this.newBook,this.newBook2];
  }

  public addBook(
    inputTitle:string,
    inputType:string,
    inputAuthor:string,
    inputPrice:number,
    inputCover:string,
    inputBookId:number,
    inputUserId:number)
    {
      let addNewBook = new Libro(inputTitle,inputType,inputAuthor,inputPrice,inputCover,inputBookId,inputUserId)

      return this.libros.push(addNewBook)
    }

  ngOnInit():void{}
}
