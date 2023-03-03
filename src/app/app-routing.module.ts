import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImageListComponent} from "./image-list/image-list.component";
import {ImageDetailComponent} from "./image-detail/image-detail.component";

const routes: Routes = [
  {path: "gallery", component: ImageListComponent},
  {path: "gallery/:id", component: ImageDetailComponent},
  {path: "", redirectTo:"gallery", pathMatch:"full"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
