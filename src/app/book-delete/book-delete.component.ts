import { Component, OnInit } from '@angular/core';
import {Book} from '../book-model';
import {BookService} from '../book.service';
import {ActivatedRoute} from '@angular/router';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: Book;
  id: number;
  message: string;

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
  deleteBook(id: number) {
    if (confirm('Bạn chắc chắn muốn xóa?')) {
      this.bookService.deleteBook(id).subscribe(data => {
        console.log(data);
        this.message = 'Xóa thành công';
      }, error => {
        this.message = 'Đã xảy ra lỗi';
        throwError(error);
      });
    }
  }
}
