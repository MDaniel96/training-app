import {Injectable} from '@angular/core';
import {ExerciseTool} from '../model/exercise-tool.model';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ExerciseToolService {

    URL = 'http://localhost:8080/training-app/api/equipments';

    exerciseTools: ExerciseTool[] = [];

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<ExerciseTool[]> {
        return this.http.get<ExerciseTool[]>(this.URL)
            .pipe(
                tap(result => this.exerciseTools = result),
                catchError(err => {
                    console.log(err);
                    return throwError(err);
                })
            );
    }
}
