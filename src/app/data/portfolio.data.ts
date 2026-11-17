import type { ContactLink, NavigationItem, Project, SkillGroup } from '../models/portfolio.models';

export const NAVIGATION: readonly NavigationItem[] = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Sobre mí', id: 'sobre-mi' },
  { label: 'Habilidades', id: 'habilidades' },
  { label: 'Proyectos', id: 'proyectos' },
  { label: 'Contacto', id: 'contacto' },
];

export const SKILLS: readonly SkillGroup[] = [
  {
    category: 'Frontend',
    symbol: '</>',
    technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Three.js'],
  },
  { category: 'Backend', symbol: '{ }', technologies: ['Go', 'Node.js'] },
  { category: 'Bases de datos', symbol: '≡', technologies: ['PostgreSQL', 'MongoDB'] },
  { category: 'Herramientas', symbol: '⌘', technologies: ['Git', 'Docker', 'MQTT'] },
];

// Reemplaza los proyectos de ejemplo y añade url cuando tengas un enlace real.
// La ilustración pertenece al proyecto y no depende de su posición en la lista.
export const PROJECTS: readonly Project[] = [
  {
    title: 'Gemelo digital de tráfico vehicular',
    artwork: 'traffic',
    featured: true,
    category: 'Simulación · Visualización 3D',
    description:
      'Simulación y visualización del tráfico vehicular en intersecciones semaforizadas. Un proyecto que conecta el desarrollo web con la representación de un entorno real en tres dimensiones.',
    technologies: ['Angular', 'TypeScript', 'Three.js'],
  },
  {
    title: 'Panel de seguimiento de proyectos',
    artwork: 'board',
    category: 'Aplicación web',
    description:
      'Espacio de ejemplo para presentar una aplicación de organización de tareas y seguimiento de proyectos. Reemplaza esta tarjeta con un proyecto propio.',
    technologies: ['Angular', 'TypeScript', 'CSS'],
    example: true,
  },
  {
    title: 'Explorador de datos',
    artwork: 'data',
    category: 'Visualización de información',
    description:
      'Espacio de ejemplo para una interfaz de consulta y visualización de datos. Edita la descripción y las tecnologías cuando agregues tu proyecto.',
    technologies: ['Angular', 'TypeScript', 'HTML'],
    example: true,
  },
];

// Sustituye las URL y los detalles de ejemplo; cambia example a false al completarlos.
export const CONTACTS: readonly ContactLink[] = [
  {
    external: true,
    example: true,
    label: 'GitHub',
    detail: 'TU_USUARIO · ejemplo',
    url: 'https://example.com/github',
  },
  {
    external: true,
    example: true,
    label: 'LinkedIn',
    detail: 'TU_PERFIL · ejemplo',
    url: 'https://example.com/linkedin',
  },
  {
    external: false,
    example: true,
    label: 'Correo',
    detail: 'tu-correo@example.com · ejemplo',
    url: 'mailto:tu-correo@example.com',
  },
];
