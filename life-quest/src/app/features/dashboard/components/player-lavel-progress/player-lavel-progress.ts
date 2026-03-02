import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Crown, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-player-lavel-progress',
  imports: [
    BaseChartDirective,
    LucideAngularModule
  ],
  templateUrl: './player-lavel-progress.html',
  styleUrl: './player-lavel-progress.css',
})
export class PlayerLavelProgress {
  data = {
    datasets: [{
      label: 'My First Dataset',
      data: [60, 40],
      backgroundColor: [
        'rgb(54, 162, 235)',
        'rgb(224, 224, 224)',
      ],
      borderWidth: 1,
      width: 1
    }],
  };

  options = {
    cutout: '90%',
    maintainAspectRatio: false,
    plugins: {
      legend: {display: false},
      tooltip: {
        enabled: false,
      }
    },
  }
  protected readonly Crown = Crown;
}
