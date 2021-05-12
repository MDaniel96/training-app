import {Injectable} from '@angular/core';
// @ts-ignore
import {Workout} from '../model/workout.model';
import {Storage} from '@ionic/storage';

@Injectable({providedIn: 'root'})
export class CustomWorkoutService {

    private readonly STORAGE_KEY: string = 'custom_workouts';

    workouts: Workout[] = [];

    private localStorage: Storage = null;

    constructor(private storage: Storage) {
        this.init();
    }

    async init() {
        this.localStorage = await this.storage.create();
        this.fetchFromLocalStorage();
    }

    async fetchFromLocalStorage() {
        const storageWorkoutsString = JSON.parse(await localStorage.getItem('_ionicstorage/_ionickv/custom_workouts')) as string;
        const storageWorkouts = JSON.parse(storageWorkoutsString) as Workout[];
        if (storageWorkouts) {
            this.workouts = storageWorkouts;
        }
    }

    getAll(): Workout[] {
        return this.workouts;
    }

    save(workout: Workout) {
        const exists = this.workouts.findIndex(w => w === workout);
        if (exists === -1) {
            this.workouts.push(workout);
        } else {
            this.workouts[exists] = workout;
        }
        this.localStorage.set(this.STORAGE_KEY, JSON.stringify(this.workouts));
    }

    delete(workout: Workout) {
        this.workouts = this.workouts.filter(w => w !== workout);
        this.localStorage.set(this.STORAGE_KEY, JSON.stringify(this.workouts));
    }
}
