import {Component} from '@angular/core';
import {CustomWorkoutService} from '../../../service/custom-workout.service';
import {NavController, Platform} from '@ionic/angular';
import {Workout} from '../../../model/workout.model';

@Component({
    selector: 'app-custom-workout-list',
    templateUrl: './custom-workout-list.component.html',
    styleUrls: ['./custom-workout-list.component.scss'],
})
export class CustomWorkoutListComponent {

    constructor(public customWorkoutService: CustomWorkoutService,
                private nav: NavController,
                private platform: Platform) {
    }

    addCustomWorkout() {
        const newWorkout = new Workout();
        newWorkout.name = 'My Workout';
        newWorkout.duration = 15;
        newWorkout.exercises = [];

        const navigationState = {workout: newWorkout};
        this.nav.navigateForward('/workout-custom-edit', {state: navigationState});
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }
}
