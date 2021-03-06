import {Component, Input} from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {pageSlideAnimation} from '../../../animations/page-slide.animation';
import {Workout} from '../../../model/workout.model';
import {ExerciseTool} from '../../../model/exercise-tool.model';

@Component({
    selector: 'app-exercise-tool-card',
    templateUrl: './exercise-tool-card.component.html',
    styleUrls: ['./exercise-tool-card.component.scss'],
})
export class ExerciseToolCardComponent {

    @Input() exerciseTool: ExerciseTool;

    @Input() customWorkout: Workout;

    constructor(private platform: Platform,
                private nav: NavController) {
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }

    selectTool() {
        if (!this.customWorkout) {
            this.nav.navigateForward('/tabs/exercises/gym', this.isIos() ? {} : {animation: pageSlideAnimation});
        } else {
            const navigationState = {workout: this.customWorkout};
            this.nav.navigateForward('/workout-custom-edit/add-exercises-select',
                this.isIos() ? {state: navigationState} : {state: navigationState, animation: pageSlideAnimation}
            );
        }
    }
}
