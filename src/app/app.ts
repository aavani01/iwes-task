import { Component } from '@angular/core';
import { DemoPageComponent } from './pages/demo-page/demo-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DemoPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}