import {Component, Input} from '@angular/core';
import {Plan} from '../../../model/plan.model';
import {NavController, Platform} from '@ionic/angular';
import {pageSlideAnimation} from '../../../animations/page-slide.animation';

@Component({
    selector: 'app-plan-item',
    templateUrl: './plan-item.component.html',
    styleUrls: ['./plan-item.component.scss'],
})
export class PlanItemComponent {

    @Input() plan: Plan;

    constructor(private platform: Platform,
                private nav: NavController) {
    }

    selectPlan() {
        const navigationState = {plan: this.plan};
        this.nav.navigateForward('/plan-detail',
            this.isIos() ? {state: navigationState} : {state: navigationState, animation: pageSlideAnimation}
        );
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }
}
