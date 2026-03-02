import { Component, signal } from '@angular/core';
import { PlayerLavelProgress } from './components/player-lavel-progress/player-lavel-progress';
import { HorizontalCard } from '../../shared/components/horizontal-card/horizontal-card';
import { Shell, TrendingUp, Zap } from 'lucide-angular';

@Component({
  selector: 'app-dashboard.page',
  imports: [
    PlayerLavelProgress,
    HorizontalCard
  ],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.css',
})
export class DashboardPage {
  protected readonly Shell = Shell;
  protected readonly Zap = Zap;
  protected readonly TrendingUp = TrendingUp;

  readonly totalXp = signal(1200);
  readonly totalGoals = signal(5);
  readonly completedGoals = signal(15);
  readonly activeGoals = signal(2);
  readonly overallProgressPercentage = signal(80);

}
