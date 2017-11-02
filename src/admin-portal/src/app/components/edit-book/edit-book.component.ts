import { Component, OnInit } from '@angular/core';
import { UploadImageService } from '../../services/upload-image.service';
import { Book } from '../../models/book';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { GetBookService } from '../../services/get-book.service';
import { EditBookService } from '../../services/edit-book.service';


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
