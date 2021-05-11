import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class MuscleGroupService {

    constructor(private http: HttpClient) {
    }

    fetchMuscleGroups() {
        return this.http.get<{ name: string }[]>('http://localhost:8080/training-app/api/muscle-groups/');
    }
}
