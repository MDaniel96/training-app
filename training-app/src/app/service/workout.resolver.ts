import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {WorkoutService} from './workout.service';
import {Workout} from '../model/workout.model';

@Injectable({providedIn: 'root'})
export class WorkoutResolver implements Resolve<Workout[]> {

    constructor(private workoutService: WorkoutService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.workoutService.getAll();
    }
}
