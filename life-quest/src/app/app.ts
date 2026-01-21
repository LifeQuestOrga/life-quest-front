import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/layout/header/header';
import { Footer } from './shared/layout/footer/footer';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, LucideAngularModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('life-quest');
}
