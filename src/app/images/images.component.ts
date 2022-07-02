import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  image1:string='../assets/cctv-camera-1312581.jpg';
  image2:string='../assets/in-the-news-1316691.jpg';
  image3:string='../assets/news-camera-1317141.jpg';
 
  ngDropdown = this.image2;

}
