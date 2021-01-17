import {Injectable} from '@angular/core';
import {Exercise} from '../model/exercise.model';
// @ts-ignore
import data from '../data/exercises.json';

@Injectable()
export class ExerciseService {

    getExercises(): Exercise[] {
        return data;
    }
}
