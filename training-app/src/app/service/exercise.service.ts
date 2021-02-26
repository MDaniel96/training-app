import {Injectable} from '@angular/core';
import {Exercise} from '../model/exercise.model';
// @ts-ignore
import exercisesJson from '../data/exercises.json';

@Injectable({providedIn: 'root'})
export class ExerciseService {

    getAll(): Exercise[] {
        return exercisesJson;
    }
}
