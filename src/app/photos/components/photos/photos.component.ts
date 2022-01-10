import { Component, OnInit } from '@angular/core';
import { Preview } from './../../../preview.model';
// Inyeccion de dependencias
// Es necesario comunicarse con elservicio para buscar
// la lista de fotos.
// import { ActivatedRoute, Params } from '@angular/router';
import { PhotosServiceService } from './../../../core/services/photos-service/photos-service.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  previews: Preview[];

  constructor(
    // private route: ActivatedRoute,
    private photosServiceService: PhotosServiceService
  ) {}

  ngOnInit(): void {

    this.previews = this.photosServiceService.getAllPreviews();
    console.log(this.previews);

  }

}
