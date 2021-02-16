import {Component, Input} from '@angular/core';
import {Workout} from '../../model/workout.model';
import {NavController, Platform} from '@ionic/angular';
import {pageSlideAnimation} from '../../animations/page-slide.animation';

@Component({
    selector: 'app-workout-item',
    templateUrl: './workout-item.component.html',
    styleUrls: ['./workout-item.component.scss'],
})
export class WorkoutItemComponent {

    @Input() workout: Workout;

    constructor(private platform: Platform,
                private nav: NavController) {
    }

    selectWorkout() {
        const navigationState = {workout: this.workout};
        this.nav.navigateForward('/workout-detail',
            this.isIos() ? {state: navigationState} : {state: navigationState, animation: pageSlideAnimation}
        );
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }
}
