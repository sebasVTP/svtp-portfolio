import { Component } from '@angular/core';
import { TrafficIllustration } from '../../components/traffic-illustration/traffic-illustration';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TrafficIllustration],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
