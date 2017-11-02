import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import 'hammerjs';
import { AppComponent } from './app.component';
import { NavBarComponent} from './components/nav-bar/nav-bar.component';
import { LoginComponent} from './components/login/login.component';
import { LoginService } from './services/login.service';
import { UploadImageService } from './services/upload-image.service'
import { GetBookListService } from './services/get-book-list.service'
import { GetBookService } from './services/get-book.service'
import { EditBookService } from './services/edit-book.service';

import { HttpModule } from '@angular/http';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBookService } from './services/add-book.service';
import { BookListComponent } from './components/book-list/book-list.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent,
    BookListComponent,
    ViewBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoginService,
    AddBookService,
    UploadImageService,
    GetBookListService,
    GetBookService,
    EditBookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
