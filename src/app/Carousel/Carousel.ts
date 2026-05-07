import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Carousel',
  templateUrl: './Carousel.html',
  styleUrls: ['./Carousel.css'],
})
export class Carousel implements OnInit {
  index: number = 1;
  total: number = 5;
  intervalId: any;
  arr: number[] = [1, 2, 3, 4, 5];
  ngOnInit(): void {
    this.BeginAutoSlide();
  }
  nextSlider(): void {
    this.index++;
    if (this.index > this.total) this.index = 1;
  }

  BeginAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlider();
    }, 1500);
  }

  next(): void {
    clearInterval(this.intervalId);
    this.index++;
    if (this.index > this.total) this.index = 1;
    this.BeginAutoSlide();
  }

  prev(): void {
    clearInterval(this.intervalId);
    this.index--;
    if (this.index < 1) this.index = this.total;
    this.BeginAutoSlide();
  }

  goToSlide(i: number): void {
    clearInterval(this.intervalId);
    this.index = i;
    this.BeginAutoSlide();
  }
}
