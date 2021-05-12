import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ExerciseService} from './exercise.service';
import {Exercise} from '../model/exercise.model';

@Injectable({providedIn: 'root'})
export class ExerciseResolver implements Resolve<Exercise[]> {

    constructor(private exerciseService: ExerciseService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.exerciseService.getAll();
    }
}
