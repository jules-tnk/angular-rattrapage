import { Component, Input, OnInit } from '@angular/core';
import {Image} from "../models/image";

@Component({
  selector: 'app-image-list-item',
  templateUrl: './image-list-item.component.html',
  styleUrls: ['./image-list-item.component.css']
})
export class ImageListItemComponent implements OnInit {

  @Input()
  image?: Image;
  constructor() { }

  ngOnInit(): void {
  }

}
