import {AfterViewInit, Component} from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {PlanService} from '../../service/plan.service';
import {PlanGroup} from '../../model/plan-group.model';
import {pageSlideAnimation} from '../../animations/page-slide.animation';

@Component({
    selector: 'app-plan',
    templateUrl: 'plan.page.html',
    styleUrls: ['plan.page.scss']
})
export class PlanPage implements AfterViewInit {

    showSlides = false;

    slideOptions = {
        slidesPerView: 1.1
    };

    constructor(public planService: PlanService,
                private platform: Platform,
                private nav: NavController) {
    }

    selectPlanGroup(group: PlanGroup) {
        const navigationState = {planGroup: group};
        this.nav.navigateForward('tabs/plans/plan-group',
            this.isIos() ? {state: navigationState} : {state: navigationState, animation: pageSlideAnimation}
        );
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }

    // fix slider bug
    ngAfterViewInit(): void {
        setTimeout(() => {
            this.showSlides = true;
        }, 50);
    }
}
