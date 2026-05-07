import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'Header-comp',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './Header-comp.html',
  styleUrl: './Header-comp.css',
})
export class Header_comp {}
