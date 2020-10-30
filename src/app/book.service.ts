import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from './book-model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>('http://localhost:3000/books/' + id);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>('http://localhost:3000/books', book);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>('http://localhost:3000/books/' + id, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/books/' +  id);
  }
}
