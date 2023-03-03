import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ImageListFromApi} from "../../models/image";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  API_KEY: string = "34099876-9cbe5989f6e750241bae58ec3";
  baseUrl:string ="https://pixabay.com/api/?key="+this.API_KEY;
  constructor(private http: HttpClient) { }
  getImagesFromApi(): Observable<ImageListFromApi>{
    return this.http.get<ImageListFromApi>(this.baseUrl);
  }

  getImageFromApi(id: number): Observable<ImageListFromApi>{
    return this.http.get<ImageListFromApi>(this.baseUrl+"&id="+id);
  }

  getImagesFromApiByWordSearch(keyword: string): Observable<ImageListFromApi>{
    return this.http.get<ImageListFromApi>(this.baseUrl+"&q="+keyword);
  }

}
