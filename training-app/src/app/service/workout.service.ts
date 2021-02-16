import {Injectable} from '@angular/core';
// @ts-ignore
import data from '../data/workouts.json';
import {Workout} from '../model/workout.model';

@Injectable({providedIn: 'root'})
export class WorkoutService {

    getWorkouts(): Workout[] {
        return data;
    }
}
