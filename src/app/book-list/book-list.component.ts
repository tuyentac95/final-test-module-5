import { Component, OnInit } from '@angular/core';
import {Book} from '../book-model';
import {BookService} from '../book.service';
import {throwError} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllBooks();
  }


  // tslint:disable-next-line:typedef
  private getAllBooks() {
    this.bookService.getAllBooks().subscribe(data => {
      this.books = data;
    }, error => {
      throwError(error);
    });
  }

  // tslint:disable-next-line:typedef
  updateBook(id: number) {
    this.router.navigate(['update/', id]);
  }

  // tslint:disable-next-line:typedef
  deleteBook(id: number) {
    this.router.navigate(['delete/', id]);
  }
}
