import {Component, Input} from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-custom-amount-popover',
  templateUrl: './custom-amount-popover.component.html',
  styleUrls: ['./custom-amount-popover.component.scss'],
})
export class CustomAmountPopoverComponent {

  @Input() exerciseType;

  constructor(private popoverController: PopoverController) {
  }

  async closePopover(amount: number = 0) {
    await this.popoverController.dismiss(amount);
  }

  getTitle() {
    return this.exerciseType === 'INTERVAL' ? 'interval' : 'repetition count';
  }

  getMetrics() {
    return this.exerciseType === 'INTERVAL' ? 'seconds' : 'reps';
  }
}
