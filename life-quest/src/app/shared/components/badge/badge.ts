import { Component, computed, input } from '@angular/core';
import { LucideAngularModule, LucideIconData} from 'lucide-angular';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-badge',
  imports: [
    LucideAngularModule,
    NgClass
  ],
  templateUrl: './badge.html',
  styleUrl: './badge.css',
})
export class Badge {
  readonly icon = input<LucideIconData>();
  readonly label = input<string>();
  readonly type = input<'info' | 'warning' | 'danger'>();

  bgColor = computed(()=> {
    switch (this.type()){
      case 'info':
        return 'bg-green-200'
      case 'warning':
        return 'bg-orange-100'
      case 'danger':
        return 'bg-red-600'
      default:
        return undefined
    }
  })
}
