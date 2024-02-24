import { Component } from '@angular/core';
import { Book } from '../types/book';
import { BooksService } from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  constructor(private bookService: BooksService){}

  books: Book[] = [];

  cart:Book[] = [];
  

  ngOnInit():void{
    this.books = this.bookService.getBooks();
  }

}
