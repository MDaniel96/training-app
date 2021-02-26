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

        if (yCurrent > this.getOffsetTop('legWoId')) {
            this.currentMuscleGroup.emit('leg');
        } else if (yCurrent > this.getOffsetTop('bicepsWoId')) {
            this.currentMuscleGroup.emit('biceps');
        } else if (yCurrent > this.getOffsetTop('shoulderWoId')) {
            this.currentMuscleGroup.emit('shoulder');
        } else if (yCurrent > this.getOffsetTop('chestWoId')) {
            this.currentMuscleGroup.emit('chest');
        } else if (yCurrent > this.getOffsetTop('absWoId')) {
            this.currentMuscleGroup.emit('abs');
        }
    }

    getOffsetTop(id: string): number {
        return document.getElementById(id).offsetTop;
    }
}
