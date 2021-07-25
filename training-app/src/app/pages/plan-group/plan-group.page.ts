import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {PlanGroup} from '../../model/plan-group.model';

@Component({
    selector: 'app-plan-group',
    templateUrl: './plan-group.page.html',
    styleUrls: ['./plan-group.page.scss'],
})
export class PlanGroupPage {

    planGroup: PlanGroup;

    constructor(private platform: Platform,
                private route: ActivatedRoute,
                private router: Router) {
        this.getWorkoutFromRoute();
    }

    private getWorkoutFromRoute() {
        this.route.queryParams.subscribe(() => {
            const navigationState = this.router.getCurrentNavigation().extras.state;
            if (navigationState) {
                this.planGroup = navigationState.planGroup;
            }
        });
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }
}
