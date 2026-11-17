export interface NavigationItem {
  readonly label: string;
  readonly id: string;
}

export interface SkillGroup {
  readonly category: string;
  readonly symbol: string;
  readonly technologies: readonly string[];
}

export interface Project {
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly artwork: 'traffic' | 'board' | 'data';
  readonly featured?: boolean;
  readonly example?: boolean;
  readonly url?: string;
}

export interface ContactLink {
  readonly label: string;
  readonly detail: string;
  readonly url: string;
  readonly external: boolean;
  readonly example: boolean;
}
