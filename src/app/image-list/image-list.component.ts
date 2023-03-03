import { Component, OnInit } from '@angular/core';
import {Image} from "../models/image";
import {ImageService} from "../services/image/image.service";

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: Image[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.imageService.getImagesFromApi().subscribe(
      imageFromApi => this.images = imageFromApi.hits
    )
  }

  getImagesByWordSearch(value: string) {
    this.imageService.getImagesFromApiByWordSearch(value).subscribe(
      imageFromApi => this.images = imageFromApi.hits
    )
  }
}
