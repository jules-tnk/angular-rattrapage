import { Component, OnInit } from '@angular/core';
import {Image} from "../models/image";
import {ImageService} from "../services/image/image.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  image?: Image;

  constructor(private imageService: ImageService,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getFromApi();
  }

  getFromApi() {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.imageService.getImageFromApi(id).subscribe(
      imageFromApi => this.image = imageFromApi.hits[0]
    )
  }

}
