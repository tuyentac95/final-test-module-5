import { Component, OnInit } from '@angular/core';
import {Book} from '../book-model';
import {BookService} from '../book.service';
import {ActivatedRoute} from '@angular/router';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  book: Book;

  constructor(private bookService: BookService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getBookById(id);
  }

  // tslint:disable-next-line:typedef
  private getBookById(id: number) {
    this.bookService.getBookById(id).subscribe(data => {
      this.book = data;
    }, error => {
      throwError(error);
    });
  }
}
