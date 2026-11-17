import { Component, input } from '@angular/core';
import type { Project } from '../../models/portfolio.models';
import { ProjectCard } from '../../components/project-card/project-card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly projects = input.required<readonly Project[]>();
}
