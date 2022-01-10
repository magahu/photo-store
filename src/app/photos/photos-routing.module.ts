import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotosComponent } from './components/photos/photos.component';
import { PreviewDetailComponent } from './components/preview-detail/preview-detail.component';

const routes: Routes = [
    {
        path: '',
        component: PhotosComponent
    },
    {
        path: ':id',
        component: PreviewDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class PhotosRoutingModule {}
