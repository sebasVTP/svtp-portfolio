import { Component } from '@angular/core';
import { CONTACTS, NAVIGATION, PROJECTS, SKILLS } from './data/portfolio.data';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Footer, Hero, About, Skills, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly navigation = NAVIGATION;
  readonly skills = SKILLS;
  readonly projects = PROJECTS;
  readonly contacts = CONTACTS;
}
