import { Component, input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';;

@Component({
  selector: 'app-horizontal-card',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './horizontal-card.html',
  styleUrl: './horizontal-card.css',
})
export class HorizontalCard {
  readonly icon = input.required<LucideIconData>();
  readonly iconColor = input<string>()
  readonly iconBackgroundColor = input<string>()
}
