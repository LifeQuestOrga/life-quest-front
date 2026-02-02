import { Component } from '@angular/core';
import { Home, LucideAngularModule, Target } from 'lucide-angular';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  imports: [
    LucideAngularModule,
    RouterLinkActive,
    RouterLink
  ],
  standalone: true,
  styleUrl: './footer.css',
})
export class Footer {

  protected readonly Home = Home;
  protected readonly Target = Target;
}
