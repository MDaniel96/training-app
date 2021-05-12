import {Injectable} from '@angular/core';
import {Exercise} from '../model/exercise.model';
// @ts-ignore
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class ExerciseService {

    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<Exercise[]>(`${environment.SERVER_URL}/exercises`);
    }
}
