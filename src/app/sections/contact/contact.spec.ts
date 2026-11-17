import { TestBed } from '@angular/core/testing';
import type { ContactLink } from '../../models/portfolio.models';
import { Contact } from './contact';

describe('Contact', () => {
  it('removes example notices when contact data is completed and respects the link type', async () => {
    await TestBed.configureTestingModule({ imports: [Contact] }).compileComponents();
    const fixture = TestBed.createComponent(Contact);
    const contact: ContactLink = {
      label: 'Contacto de prueba',
      detail: 'Dato de ejemplo',
      url: 'https://example.com/contact',
      external: true,
      example: true,
    };
    fixture.componentRef.setInput('links', [contact]);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('.contact-note')).not.toBeNull();
    expect(page.querySelector('.sr-only')).not.toBeNull();
    expect(page.querySelector('a')?.getAttribute('target')).toBe('_blank');

    fixture.componentRef.setInput('links', [
      {
        ...contact,
        detail: 'Correo de contacto',
        url: 'mailto:contact@example.com',
        external: false,
        example: false,
      },
    ]);
    await fixture.whenStable();

    expect(page.querySelector('.contact-note')).toBeNull();
    expect(page.querySelector('.sr-only')).toBeNull();
    expect(page.querySelector('a')?.hasAttribute('target')).toBe(false);
    expect(page.querySelector('small')?.textContent).toBe('Correo de contacto');
  });
});
