import {Injectable} from '@angular/core';
import {ExerciseTool} from '../model/exercise-tool.model';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class ExerciseToolService {

    exerciseTools: ExerciseTool[] = [];

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<ExerciseTool[]> {
        return this.http.get<ExerciseTool[]>(`${environment.SERVER_URL}/equipments`)
            .pipe(
                tap(result => this.exerciseTools = result),
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                })
            );
    }
}
