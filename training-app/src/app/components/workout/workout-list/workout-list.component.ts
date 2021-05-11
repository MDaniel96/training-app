import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Workout} from '../../../model/workout.model';
import {WorkoutService} from '../../../service/workout.service';

@Component({
    selector: 'app-workout-list',
    templateUrl: './workout-list.component.html',
    styleUrls: ['./workout-list.component.scss'],
})
export class WorkoutListComponent implements OnInit {

    @Output() currentMuscleGroup = new EventEmitter<string>();

    @Input() exerciseType: string;

    workouts: Workout[] = [];

    muscleGroups = ['abs', 'chest', 'shoulder', 'biceps', 'leg'];

    constructor(private workoutService: WorkoutService) {
    }

    ngOnInit() {
        this.workouts = this.workoutService.workouts.filter(workout => workout.equipments.includes(this.exerciseType));
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

    getWorkoutsForMuscleGroup(muscleGroup: string): Workout[] {
        return this.workouts.filter(w => w.muscleGroups.includes(muscleGroup));
    }
}
