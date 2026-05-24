import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card';
import { ButtonComponent } from '../../components/button/button';

interface Turbine {
  id: string;
  title: string;
  content: string;
  status: 'online' | 'maintenance' | 'offline';
}

@Component({
  selector: 'app-demo-page',
  standalone: true,
  imports: [ButtonComponent, CardComponent],
  templateUrl: './demo-page.html',
  styleUrl: './demo-page.scss'
})
export class DemoPageComponent {
  lastAction: string = '';
  selectedTurbineId: string = ''; 

  // turbine details for card components
  turbines: Turbine[] = [
    { id: 'A', title: 'Turbine A — Offshore N1', content: 'Wind speed: 12.4 m/s | Output: 3.2 MW', status: 'online' },
    { id: 'B', title: 'Turbine B — Offshore N2', content: 'Wind speed: 9.1 m/s | Output: 0 MW', status: 'maintenance' },
    { id: 'C', title: 'Turbine C — Offshore N3', content: 'Wind speed: 6.3 m/s | Output: 0 MW', status: 'offline' }
  ];

  // computed — true only when no turbine selected
  get noTurbineSelected(): boolean {
    return this.selectedTurbineId === '';
  }

  // enabling buttons based on Card selection
  onCardClick(turbineId: string): void {
    this.selectedTurbineId = turbineId;
    this.lastAction = `Turbine ${turbineId} selected`;
  }

  onStartInspection(): void {
    this.lastAction = `Inspection started for Turbine ${this.selectedTurbineId}`;
  }

  onExportReport(): void {
    this.lastAction = 'Exporting performance report...';
  }

  onResetSelection(): void {
    this.selectedTurbineId = '';
    this.lastAction = '';
  }
}