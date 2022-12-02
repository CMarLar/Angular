import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
//importamos los servicios
import { BookServiceService } from 'src/app/shared/book-service.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  constructor(public libroService: BookServiceService){}

  public addBook(
    inputTitle:string,
    inputType:string,
    inputAuthor:string,
    inputPrice:number,
    inputCover:string,
    inputBookId:number,
    inputUserId:number)
    {
      this.libroService.add(new Libro(inputTitle,inputType,inputAuthor,inputPrice,inputCover,inputBookId,inputUserId))
    }

}
