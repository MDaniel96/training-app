import {Component, Input} from '@angular/core';
import {Workout} from '../../../model/workout.model';
import {ActionSheetController, NavController, Platform} from '@ionic/angular';
import {CustomWorkoutService} from '../../../service/custom-workout.service';
import {pageSlideAnimation} from '../../../animations/page-slide.animation';

@Component({
    selector: 'app-custom-workout-item',
    templateUrl: './custom-workout-item.component.html',
    styleUrls: ['./custom-workout-item.component.scss']
})
export class CustomWorkoutItemComponent {

    @Input() workout: Workout;

    constructor(private customWorkoutService: CustomWorkoutService,
                private platform: Platform,
                private nav: NavController,
                private actionSheetController: ActionSheetController) {
    }

    selectCustomWorkout() {
        const navigationState = {workout: this.workout, custom: true};
        this.nav.navigateForward('/workout-detail',
            this.isIos() ? {state: navigationState} : {state: navigationState, animation: pageSlideAnimation}
        );
    }

    async showOptions(event) {
        event.stopPropagation();
        const actionSheet = await this.actionSheetController.create({
            cssClass: 'options-action-sheet',
            buttons: [
                {
                    text: 'Edit',
                    icon: 'pencil',
                    handler: () => {
                        // TODO: edit workout
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    cssClass: 'delete',
                    icon: 'trash',
                    handler: () => {
                        this.customWorkoutService.delete(this.workout);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: 'close'
                }
            ]
        });
        await actionSheet.present();
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }
}
