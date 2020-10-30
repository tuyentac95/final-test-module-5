import { Component, OnInit } from '@angular/core';
import {Book} from '../book-model';
import {BookService} from '../book.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  book: Book;
  message: string;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.book = new Book();
    this.message = '';
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.bookService.createBook(this.book).subscribe(data => {
      this.message = 'Đã thêm sách ' + data.title;
      this.book = new Book();
    }, error => {
      this.message = 'Thêm thành công';
      throwError(error);
    });
  }
}
