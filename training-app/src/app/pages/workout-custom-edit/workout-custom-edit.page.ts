import {Component} from '@angular/core';
import {NavController, Platform, PopoverController} from '@ionic/angular';
import {Workout} from '../../model/workout.model';
import {ItemReorderEventDetail} from '@ionic/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomAmountPopoverComponent} from '../../components/workout/custom-amount-popover/custom-amount-popover.component';
import {cloneDeep} from 'lodash';
import {Exercise} from '../../model/exercise.model';
import {fadeInAnimation} from '../../animations/fade-in.animation';

@Component({
    selector: 'app-workout-custom-edit',
    templateUrl: './workout-custom-edit.page.html',
    styleUrls: ['./workout-custom-edit.page.scss'],
    animations: [fadeInAnimation]
})
export class WorkoutCustomEditPage {

    workout: Workout;
    originalWorkout: Workout;
    selectedExerciseNumber = 0;

    constructor(private platform: Platform,
                private route: ActivatedRoute,
                private router: Router,
                private nav: NavController,
                private popoverController: PopoverController) {
        this.getWorkoutFromRoute();
    }

    private getWorkoutFromRoute() {
        this.route.queryParams.subscribe(() => {
            const navigationState = this.router.getCurrentNavigation().extras.state;
            if (navigationState) {
                this.originalWorkout = navigationState.workout;
                this.workout = cloneDeep(this.originalWorkout);
            }
        });
    }

    doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
        this.workout.exercises = ev.detail.complete(this.workout.exercises);
    }

    save() {
        this.originalWorkout.name = this.workout.name;
        this.originalWorkout.exercises = this.workout.exercises;
        this.originalWorkout.duration = this.workout.duration;
        this.nav.back();
    }

    deleteSelected() {
        this.workout.exercises = this.workout.exercises.filter(e => !e.isChecked);
        this.selectedExerciseNumber = 0;
    }

    changeInterval() {
        this.presentPopover('INTERVAL').then();
    }

    changeRepCount() {
        this.presentPopover('REP').then();
    }

    private async presentPopover(exerciseType: string) {
        const popover = await this.popoverController.create({
            component: CustomAmountPopoverComponent,
            cssClass: 'set-amount-popover',
            backdropDismiss: true,
            animated: true,
            componentProps: {
                title: exerciseType
            }
        });
        popover.onDidDismiss().then(data => {
            const amount = data.data;
            if (amount && amount !== '' && amount !== '0') {
                this.setSelectedTypeAndAmount(exerciseType, amount);
            }
        });
        return await popover.present();
    }

    private setSelectedTypeAndAmount(type: string, amount: number) {
        this.workout.exercises = this.workout.exercises.map(exercise => {
            if (exercise.isChecked) {
                exercise.amount = amount;
                exercise.type = type;
            }
            exercise.isChecked = false;
            return exercise;
        });
        this.selectedExerciseNumber = 0;
    }

    closeAmountEdit() {
        this.selectedExerciseNumber = 0;
        this.workout.exercises = this.workout.exercises.map(e => {
            e.isChecked = false;
            return e;
        });
    }

    selectExercise(exercise: Exercise) {
        this.workout.exercises.find(e => e === exercise).isChecked = true;
        this.exerciseSelected();
    }

    exerciseSelected() {
        this.selectedExerciseNumber = this.workout.exercises.filter(e => e.isChecked).length;
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }
}
