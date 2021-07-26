import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {Plan} from '../../model/plan.model';
import {PlanService} from '../../service/plan.service';

@Component({
    selector: 'app-plan-detail',
    templateUrl: './plan-detail.page.html',
    styleUrls: ['./plan-detail.page.scss'],
})
export class PlanDetailPage implements AfterViewInit {

    plan: Plan;
    isMyPlan: false;

    @ViewChild('title') title: ElementRef;

    headerMaxHeight: number;
    titleDistance = 0;

    constructor(private platform: Platform,
                private route: ActivatedRoute,
                private router: Router,
                private nav: NavController,
                private planService: PlanService) {
        this.getPlanFromRoute();
    }

    private getPlanFromRoute() {
        this.route.queryParams.subscribe(() => {
            const navigationState = this.router.getCurrentNavigation().extras.state;
            if (navigationState) {
                this.plan = navigationState.plan;
                this.isMyPlan = navigationState.isMyPlan;
            }
        });
    }

    startPlan() {
        this.planService.myPlan = this.plan;
        this.nav.navigateRoot('/');
    }

    leavePlan() {
        this.planService.myPlan = null;
        this.nav.navigateRoot('/');
    }

    ngAfterViewInit() {
        this.headerMaxHeight = Math.round(window.innerHeight * 0.3);
    }

    resizeTitle(headerHeight: number) {
        this.titleDistance = (this.titleDistance === 0) ? (this.title.nativeElement.offsetLeft) : (this.titleDistance);
        const headerMinHeight = 96;
        const maxFontSize = 25;
        const fontSize = 20 + 5 * ((headerHeight - headerMinHeight) / (this.headerMaxHeight - headerMinHeight));
        const scaleRatio = fontSize / maxFontSize;
        const scale = `scale(${scaleRatio})`;
        const translateRatio = (1 - scaleRatio) / 0.2;
        const translate = `translateX(${this.titleDistance * translateRatio * (1 + (1 - scaleRatio)) * -1}px)`;
        this.title.nativeElement.style.transform = scale + translate;
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }
}
