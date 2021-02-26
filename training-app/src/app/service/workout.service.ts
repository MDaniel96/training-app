import {Injectable} from '@angular/core';
// @ts-ignore
import workoutsJson from '../data/workouts.json';
import {Workout} from '../model/workout.model';

@Injectable({providedIn: 'root'})
export class WorkoutService {

    getAll(): Workout[] {
        return workoutsJson;
    }
}
