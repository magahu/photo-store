import { Component, OnInit, AfterViewInit } from '@angular/core';
// Adding JS for swipper
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit{

  // Initializing the module
  mySwiper: Swiper;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container');
  }

}
