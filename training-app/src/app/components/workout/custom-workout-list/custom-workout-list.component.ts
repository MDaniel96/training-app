import {Component} from '@angular/core';
import {CustomWorkoutService} from '../../../service/custom-workout.service';

@Component({
    selector: 'app-custom-workout-list',
    templateUrl: './custom-workout-list.component.html',
    styleUrls: ['./custom-workout-list.component.scss'],
})
export class CustomWorkoutListComponent {

    constructor(public customWorkoutService: CustomWorkoutService) {
    }
}
