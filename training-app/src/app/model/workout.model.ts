import {Exercise} from './exercise.model';

export class Workout {
    name = 'My Workout';
    image: string;
    duration = 15;
    type: string;
    intensity: number;
    muscleGroups: string;
    equipments: string;
    exercises: Exercise[] = [];
}
