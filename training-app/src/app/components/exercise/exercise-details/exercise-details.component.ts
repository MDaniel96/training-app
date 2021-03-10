import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {Exercise} from '../../../model/exercise.model';
import {fadeInStateAnimation} from '../../../animations/fade-in.animation';
import {AddToWorkoutPanelComponent} from '../../panel/add-to-workout-panel/add-to-workout-panel.component';

@Component({
    selector: 'app-exercise-details',
    templateUrl: './exercise-details.component.html',
    styleUrls: ['./exercise-details.component.scss'],
    animations: [fadeInStateAnimation]
})
export class ExerciseDetailsComponent implements AfterViewInit {

    @Input() exercise: Exercise;

    @ViewChild('addToWorkout') addToWorkoutPanel: AddToWorkoutPanelComponent;

    showAddToWorkoutPanel = false;
    showSlides = false;

    state = 'out';

    addToCustomWorkout() {
        this.addToWorkoutPanel.open();
    }

    // fix slider bug
    ngAfterViewInit(): void {
        setTimeout(() => {
            this.showSlides = true;
            this.showAddToWorkoutPanel = true;
        }, 0);
    }

    removeDashes(str: string): string {
        return str.replace(/_/g, ' ');
    }
}
