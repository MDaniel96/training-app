import {Component, EventEmitter, Output} from '@angular/core';
import {Workout} from '../../../model/workout.model';
import {WorkoutService} from '../../../service/workout.service';

@Component({
    selector: 'app-workout-list',
    templateUrl: './workout-list.component.html',
    styleUrls: ['./workout-list.component.scss'],
})
export class WorkoutListComponent {

    @Output() currentMuscleGroup = new EventEmitter<string>();

    workouts: Workout[];

    muscleGroups = ['abs', 'chest', 'shoulder', 'biceps', 'leg'];

    constructor(private workoutService: WorkoutService) {
        this.workouts = workoutService.getAll();
    }

    onWorkoutsScroll(event: CustomEvent) {
        const headerHeight = 50;
        const yCurrent = event.detail.scrollTop + headerHeight + 20;

        let selected = false;
        this.muscleGroups.slice().reverse().forEach(muscleGroup => {
            if (yCurrent > this.getOffsetTop(muscleGroup + 'WoId') && !selected) {
                this.currentMuscleGroup.emit(muscleGroup);
                selected = true;
            }
        });
    }

    getOffsetTop(id: string): number {
        return document.getElementById(id).offsetTop;
    }
}
