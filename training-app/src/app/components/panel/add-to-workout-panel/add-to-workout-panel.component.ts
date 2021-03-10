import {Component, Input} from '@angular/core';
import {MenuController, ModalController, NavController, ToastController} from '@ionic/angular';
import {CustomWorkoutService} from '../../../service/custom-workout.service';
import {Exercise} from '../../../model/exercise.model';
import {Workout} from '../../../model/workout.model';
import {cloneDeep} from 'lodash';

@Component({
    selector: 'app-add-to-workout-panel',
    templateUrl: './add-to-workout-panel.component.html',
    styleUrls: ['./add-to-workout-panel.component.scss'],
})
export class AddToWorkoutPanelComponent {

    @Input() exercise: Exercise;

    customWorkouts: Workout[];

    constructor(private customWorkoutService: CustomWorkoutService,
                private menu: MenuController,
                private nav: NavController,
                private modalController: ModalController,
                private toastController: ToastController) {
        this.customWorkouts = this.customWorkoutService.getAll();
    }

    async open() {
        await this.menu.open('addToWorkout');
    }

    async close() {
        await this.menu.close('addToWorkout');
    }

    createWorkout() {
        const newWorkout = new Workout();
        this.addExerciseToWorkout(newWorkout);
        const navigationState = {workout: newWorkout};
        this.nav.navigateForward('/workout-custom-edit', {state: navigationState});
    }

    addExerciseToWorkout(workout: Workout, showToast = false) {
        const exerciseToAdd = cloneDeep(this.exercise);
        exerciseToAdd.type = 'INTERVAL';
        exerciseToAdd.amount = 30;
        workout.exercises.push(exerciseToAdd);
        this.modalController.dismiss();
        if (showToast) {
            this.showToast(`Added to ${workout.name}`);
        }
    }

    private async showToast(text: string) {
        const toast = await this.toastController.create({
            message: text,
            cssClass: 'toast',
            duration: 2000
        });
        setTimeout(() => {
            toast.present();
        }, 250);
    }
}
