import {Injectable} from '@angular/core';
// @ts-ignore
import exerciseToolJson from '../data/exercise-tools.json';
import {ExerciseTool} from '../model/exercise-tool.model';

@Injectable({providedIn: 'root'})
export class ExerciseToolService {

    getAll(): ExerciseTool[] {
        return exerciseToolJson;
    }
}
