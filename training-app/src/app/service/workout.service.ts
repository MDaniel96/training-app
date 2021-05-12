import {Injectable} from '@angular/core';
// @ts-ignore
import {Workout} from '../model/workout.model';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class WorkoutService {

    workouts: Workout[];

    constructor(private http: HttpClient) {
        this.workouts = [];
    }

    getAll(): Observable<Workout[]> {
        return this.http.get<Workout[]>(`${environment.SERVER_URL}/workouts`)
            .pipe(
                tap(result => this.workouts = result),
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                })
            );
    }
}
