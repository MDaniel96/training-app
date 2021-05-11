import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ExerciseToolService} from './exercise-tool.service';
import {ExerciseTool} from '../model/exercise-tool.model';

@Injectable({providedIn: 'root'})
export class ExerciseToolResolver implements Resolve<ExerciseTool[]> {

    constructor(private exerciseToolService: ExerciseToolService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.exerciseToolService.getAll();
    }
}
