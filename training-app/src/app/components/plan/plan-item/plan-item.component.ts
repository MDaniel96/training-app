import {Component, Input} from '@angular/core';
import {Plan} from '../../../model/plan.model';
import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-plan-item',
    templateUrl: './plan-item.component.html',
    styleUrls: ['./plan-item.component.scss'],
})
export class PlanItemComponent {

    @Input() plan: Plan;

    constructor(private platform: Platform) {
    }

    selectPlan() {
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }
}
