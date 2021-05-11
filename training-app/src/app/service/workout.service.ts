import {Injectable} from '@angular/core';
// @ts-ignore
import {Workout} from '../model/workout.model';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class WorkoutService {

    URL = 'http://localhost:8080/training-app/api/workouts';

    workouts: Workout[];

    constructor(private http: HttpClient) {
        this.workouts = [];
    }

    getAll(): Observable<Workout[]> {
        return this.http.get<Workout[]>(this.URL)
            .pipe(
                tap(result => this.workouts = result),
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                })
            );
    }
}
