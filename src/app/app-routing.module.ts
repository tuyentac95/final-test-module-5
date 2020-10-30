import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookViewComponent} from './book-view/book-view.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookUpdateComponent} from './book-update/book-update.component';
import {BookDeleteComponent} from './book-delete/book-delete.component';

const routes: Routes = [
  {path: 'books', component: BookListComponent},
  {path: 'view/:id', component: BookViewComponent},
  {path: 'create', component: BookCreateComponent},
  {path: 'update/:id', component: BookUpdateComponent},
  {path: 'delete/:id', component: BookDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
