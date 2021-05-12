import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class MuscleGroupService {

    constructor(private http: HttpClient) {
    }

    fetchMuscleGroups() {
        return this.http.get<{ name: string }[]>(`${environment.SERVER_URL}/equipments`);
    }
}
