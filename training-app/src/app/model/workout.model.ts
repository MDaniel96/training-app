import {Exercise} from './exercise.model';

export class Workout {
    name: string;
    image: string;
    duration: number;
    type: string;
    muscleGroups: string;
    equipments: string;
    exercises: Exercise[];
}
