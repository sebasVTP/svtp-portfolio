import { Component, signal } from '@angular/core';

interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  example?: boolean;
  url?: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly currentYear = new Date().getFullYear();
  readonly menuOpen = signal(false);
  readonly navigation = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Sobre mí', id: 'sobre-mi' },
    { label: 'Habilidades', id: 'habilidades' },
    { label: 'Proyectos', id: 'proyectos' },
    { label: 'Contacto', id: 'contacto' },
  ];
  readonly skills = [
    {
      category: 'Frontend',
      symbol: '</>',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Three.js'],
    },
    { category: 'Backend', symbol: '{ }', technologies: ['Go', 'Node.js'] },
    { category: 'Bases de datos', symbol: '≡', technologies: ['PostgreSQL', 'MongoDB'] },
    { category: 'Herramientas', symbol: '⌘', technologies: ['Git', 'Docker', 'MQTT'] },
  ];
  // Edita estos datos y añade url únicamente cuando tengas un enlace real.
  readonly projects: Project[] = [
    {
      title: 'Gemelo digital de tráfico vehicular',
      category: 'Simulación · Visualización 3D',
      description:
        'Simulación y visualización del tráfico vehicular en intersecciones semaforizadas. Un proyecto que conecta el desarrollo web con la representación de un entorno real en tres dimensiones.',
      technologies: ['Angular', 'TypeScript', 'Three.js'],
    },
    {
      title: 'Panel de seguimiento de proyectos',
      category: 'Aplicación web',
      description:
        'Espacio de ejemplo para presentar una aplicación de organización de tareas y seguimiento de proyectos. Reemplaza esta tarjeta con un proyecto propio.',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      example: true,
    },
    {
      title: 'Explorador de datos',
      category: 'Visualización de información',
      description:
        'Espacio de ejemplo para una interfaz de consulta y visualización de datos. Edita la descripción y las tecnologías cuando agregues tu proyecto.',
      technologies: ['Angular', 'TypeScript', 'HTML'],
      example: true,
    },
  ];
  // Sustituye las URL de example.com y el correo antes de publicar.
  readonly contacts = [
    { label: 'GitHub', detail: 'TU_USUARIO · ejemplo', url: 'https://example.com/github' },
    { label: 'LinkedIn', detail: 'TU_PERFIL · ejemplo', url: 'https://example.com/linkedin' },
    {
      label: 'Correo',
      detail: 'tu-correo@example.com · ejemplo',
      url: 'mailto:tu-correo@example.com',
    },
  ];
}
