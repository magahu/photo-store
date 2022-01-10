import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// Inyeccion de dependencias
// Es necesario comunicarse con elservicio para buscar
// el id solicitado.
import { PhotosServiceService } from '../../../core/services/photos-service/photos-service.service';
import { Preview } from '../../../preview.model';

@Component({
  selector: 'app-preview-detail',
  templateUrl: './preview-detail.component.html',
  styleUrls: ['./preview-detail.component.scss']
})
export class PreviewDetailComponent implements OnInit {

  photo: Preview;

  constructor(
     private route: ActivatedRoute,
     private photoService: PhotosServiceService
     ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      const id = params.id;
      console.log(id);
      const obj = this.photoService.getPreview(id);
      console.log(obj);
      this.photo = this.photoService.getPreview(id);
    });
  }

}
