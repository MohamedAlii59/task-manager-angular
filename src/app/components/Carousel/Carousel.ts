import { Component, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'Carousel',
  templateUrl: './Carousel.html',
  styleUrls: ['./Carousel.css'],
})
export class Carousel implements OnDestroy {
  readonly total = 5;
  readonly arr = [1, 2, 3, 4, 5];

  index = signal(1);
  private intervalId: ReturnType<typeof setInterval> | null = null;

  constructor() {
    this.beginAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  private beginAutoSlide() {
    this.intervalId = setInterval(() => this.advance(), 2000);
  }

  private stopAutoSlide() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private restart(fn: () => void) {
    this.stopAutoSlide();
    fn();
    this.beginAutoSlide();
  }

  private advance() {
    this.index.update((i) => (i >= this.total ? 1 : i + 1));
  }

  next() {
    this.restart(() => this.advance());
  }

  prev() {
    this.restart(() =>
      this.index.update((i) => (i <= 1 ? this.total : i - 1))
    );
  }

  goToSlide(i: number) {
    this.restart(() => this.index.set(i));
  }
}
