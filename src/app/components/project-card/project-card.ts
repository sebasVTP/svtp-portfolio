import { Component, input } from '@angular/core';
import type { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly number = input.required<number>();
}
