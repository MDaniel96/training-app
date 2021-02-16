import {Component, Input} from '@angular/core';
import {Exercise} from '../../model/exercise.model';
import {ModalController, Platform} from '@ionic/angular';
import {ExerciseDetailsComponent} from '../exercise-details/exercise-details.component';

@Component({
    selector: 'app-exercise-item',
    templateUrl: './exercise-item.component.html',
    styleUrls: ['./exercise-item.component.scss'],
})
export class ExerciseItemComponent {

    @Input() exercise: Exercise;

    @Input() amount: boolean;

    constructor(private platform: Platform,
                private modalController: ModalController) {
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }

    async selectExercise() {
        const modal = await this.modalController.create({
            component: ExerciseDetailsComponent,
            cssClass: 'exercise-detail-modal',
            swipeToClose: true,
            mode: 'ios',
            componentProps: {
                exercise: this.exercise
            }
        });
        return await modal.present();
    }
}
