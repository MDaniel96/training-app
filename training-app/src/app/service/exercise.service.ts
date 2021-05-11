import {Injectable} from '@angular/core';
import {Exercise} from '../model/exercise.model';
// @ts-ignore
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ExerciseService {

    URL = 'http://localhost:8080/training-app/api/exercises';

    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<Exercise[]>(this.URL);
    }
}
