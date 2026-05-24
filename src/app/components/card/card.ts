import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrls: ['./card.scss']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() clickable: boolean = false;
  @Output() cardClicked = new EventEmitter<void>();

  handleClick(): void {
    if (this.clickable) {
      this.cardClicked.emit();
    }
  }
}