import { Component } from '@angular/core';
import { Badge } from '../../components/badge/badge';
import { Crown, FileIcon, LucideAngularModule, Sparkles, Zap } from 'lucide-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  imports: [
    Badge,
    LucideAngularModule
  ],
  standalone: true
})
export class Header {
  protected readonly FileIcon = FileIcon;
  protected readonly Crown = Crown;
  protected readonly Zap = Zap;
  protected readonly Sparkles = Sparkles;
}
