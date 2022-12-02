import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { BookServiceService } from 'src/app/shared/book-service.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent {
  constructor(public libroService:BookServiceService){}

  public modifyBook(
    inputTitle:string,
    inputType:string,
    inputAuthor:string,
    inputPrice:number,
    inputCover:string,
    inputBookId:number,
    inputUserId:number)
    {
      this.libroService.edit(new Libro(inputTitle,inputType,inputAuthor,inputPrice,inputCover,inputBookId,inputUserId))
    }
}
