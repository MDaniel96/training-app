import {Injectable} from '@angular/core';
import {Exercise} from '../model/exercise.model';
// @ts-ignore
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ExerciseService {

    exercises: Exercise[] = [];

    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<Exercise[]>(`${environment.SERVER_URL}/exercises`)
            .pipe(
                tap(result => this.exercises = result),
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                })
            );
    }
}
