import {
  Component,
  OnInit,
  Input,
  Output,
 } from '@angular/core';
import { Preview } from './../../../preview.model';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input() photo: Preview;

  constructor() { }

  ngOnInit(): void {
  }

}
