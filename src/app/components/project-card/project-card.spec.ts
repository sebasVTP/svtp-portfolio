import { TestBed } from '@angular/core/testing';
import type { Project } from '../../models/portfolio.models';
import { ProjectCard } from './project-card';

const project: Project = {
  title: 'Proyecto de prueba',
  category: 'Simulación',
  description: 'Descripción del proyecto.',
  technologies: ['TypeScript'],
  artwork: 'traffic',
  featured: true,
};

describe('ProjectCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProjectCard] }).compileComponents();
  });

  it('keeps the project artwork and featured state when its list position changes', async () => {
    const fixture = TestBed.createComponent(ProjectCard);
    fixture.componentRef.setInput('project', project);
    fixture.componentRef.setInput('number', 3);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h3')?.textContent).toBe(project.title);
    expect(page.querySelector('.mini-road')).not.toBeNull();
    expect(page.querySelector('.project.featured')).not.toBeNull();
    expect(page.querySelector('.project-number')?.textContent).toBe('03');
    expect(page.querySelector('a')).toBeNull();
    expect(page.querySelector('.link-pending')).not.toBeNull();
  });

  it('updates its presentation and optional link from new inputs', async () => {
    const fixture = TestBed.createComponent(ProjectCard);
    fixture.componentRef.setInput('project', project);
    fixture.componentRef.setInput('number', 1);
    await fixture.whenStable();

    fixture.componentRef.setInput('project', {
      ...project,
      artwork: 'data',
      featured: false,
      example: true,
      url: 'https://example.com/project',
    } satisfies Project);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const link = page.querySelector('a');

    expect(page.querySelector('.mini-road')).toBeNull();
    expect(page.querySelector('.chart-bars')).not.toBeNull();
    expect(page.querySelector('.project.featured')).toBeNull();
    expect(page.querySelector('.example-label')).not.toBeNull();
    expect(page.querySelector('.link-pending')).toBeNull();
    expect(link?.getAttribute('href')).toBe('https://example.com/project');
    expect(link?.getAttribute('rel')).toContain('noopener');
  });
});
