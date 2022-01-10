import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotosComponent} from './components/photos/photos.component';
import { PreviewDetailComponent } from './components/preview-detail/preview-detail.component';
// Componentes compartidos
import { SharedModule } from './../shared/shared.module';


@NgModule({
    declarations: [
        PhotoComponent,
        PhotosComponent,
        PreviewDetailComponent
    ],
    imports: [
        CommonModule,
        PhotosRoutingModule,
        SharedModule
    ]
})

export class PhotosModule {}
