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
import { HttpModule } from '@angular/http';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBookService } from './services/add-book.service';
import { BookListComponent } from './components/book-list/book-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent,
    BookListComponent
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
    GetBookListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
