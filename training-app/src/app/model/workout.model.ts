import {Exercise} from './exercise.model';

export class Workout {
    name = 'My Workout';
    image: string;
    duration = 15;
    type: string;
    muscleGroups: string;
    equipments: string;
    exercises: Exercise[] = [];
}
