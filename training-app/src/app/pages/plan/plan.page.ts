import {AfterViewInit, Component} from '@angular/core';
import {Platform} from '@ionic/angular';
import {PlanService} from '../../service/plan.service';

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
                private platform: Platform) {
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
