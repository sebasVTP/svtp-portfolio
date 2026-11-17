import { Component, input, signal } from '@angular/core';
import type { NavigationItem } from '../../models/portfolio.models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly items = input.required<readonly NavigationItem[]>();
  readonly menuOpen = signal(false);
}
