import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(){
    return [
      {
        name : "clean code",
        image : "https://m.media-amazon.com/images/I/51E2055ZGUL._SY425_.jpg",
        author : "Robert C Martin",
        amount:700
      },
      {
        name : "the pragmatic programmer",
        image : "https://m.media-amazon.com/images/I/71f743sOPoL._SY425_.jpg",
        author : "David Thomas",
        amount:800
      },
      {
        name : "Data Governance",
        image : "https://m.media-amazon.com/images/I/817VfBepeKL._SY425_.jpg",
        author : "John Ladley",
        amount:1200
      },
      {
        name : "Amazon Associates Affiliate Program",
        image : "https://m.media-amazon.com/images/I/51h8M3HE74L._SY445_SX342_.jpg",
        author : "Ryan Stevens",
        amount:850
      }
    ];
  }

}
