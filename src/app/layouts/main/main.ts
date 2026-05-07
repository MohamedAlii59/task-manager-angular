import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header_comp } from '../../components/Header-Comp/Header-comp';
import { Footer_comp } from '../../components/Footer-Comp/Footer-comp';

@Component({
  selector: 'app-main',
  imports: [Header_comp, RouterOutlet, Footer_comp],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
