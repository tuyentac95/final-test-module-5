import { Component, OnInit } from '@angular/core';
import {Book} from '../book-model';
import {BookService} from '../book.service';
import {ActivatedRoute} from '@angular/router';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  book: Book;
  message: string;
  id: number;

  constructor(private bookService: BookService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe(data => {
      this.book = data;
    });
    this.message = '';
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.bookService.updateBook(this.id, this.book).subscribe(data => {
      console.log(data);
      this.message = 'Đã cập nhật sách ' + data.title;
    }, error => {
      this.message = 'Đã xảy ra lỗi';
      throwError(error);
    });
  }
}
