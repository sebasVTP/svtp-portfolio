import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  it('should render the portfolio and valid section navigation', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('h1')?.textContent).toContain('Sebastián');
    for (const link of page.querySelectorAll<HTMLAnchorElement>('nav a')) {
      expect(page.querySelector(link.hash)).not.toBeNull();
    }
    expect(page.querySelectorAll('.project').length).toBe(3);
    expect(page.querySelectorAll('.example-label').length).toBe(2);
  });

  it('should toggle the mobile menu and close it after navigation', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const toggle = page.querySelector<HTMLButtonElement>('.menu-toggle')!;
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    toggle.click();
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    page.querySelector<HTMLAnchorElement>('nav a')!.click();
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });
});
