import { Component, computed, input } from '@angular/core';
import type { ContactLink } from '../../models/portfolio.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly links = input.required<readonly ContactLink[]>();
  readonly hasExamples = computed(() => this.links().some((link) => link.example));
}
