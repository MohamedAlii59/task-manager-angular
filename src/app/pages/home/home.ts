import { Component } from '@angular/core';
import { Carousel } from '../../components/Carousel/Carousel';

@Component({
  selector: 'app-home',
  imports: [Carousel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
