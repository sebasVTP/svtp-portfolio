import { Component, input } from '@angular/core';
import type { SkillGroup } from '../../models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  readonly groups = input.required<readonly SkillGroup[]>();
}
