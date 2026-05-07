import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header_comp } from '../Header-Comp/Header-comp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header_comp],
  templateUrl: './root.html',
  styleUrl: './root.css',
})
export class Root {}
