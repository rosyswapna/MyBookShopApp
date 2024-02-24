import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../types/book';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  @Input() book: Book = {} as Book;
  isInCart:Boolean = false;

  constructor(private cartService: CartService){}

  ngOnInit(){}

  addToCart(){
    this.isInCart = true;
    this.cartService.add(this.book);
  }

  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book);
  }  

}
