import {Injectable} from '@angular/core';
// @ts-ignore
import customWorkoutsJson from '../data/custom-workouts.json';
import {Workout} from '../model/workout.model';

@Injectable({providedIn: 'root'})
export class CustomWorkoutService {

    workouts: Workout[] = customWorkoutsJson;

    getAll(): Workout[] {
        return this.workouts;
    }

    save(workout: Workout) {
        if (!this.workouts.includes(workout)) {
            this.workouts.push(workout);
        }
    }

    delete(workout: Workout) {
        this.workouts = this.workouts.filter(w => w !== workout);
    }
}
