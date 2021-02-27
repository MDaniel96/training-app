import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Exercise} from '../../../model/exercise.model';
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
    @Input() custom: boolean;

    @Input() selectedExerciseNumber: number;

    @Output() selected = new EventEmitter<void>();

    constructor(private platform: Platform,
                private modalController: ModalController) {
    }

    selectExercise() {
        if (this.custom) {
            this.exercise.isChecked = !this.exercise.isChecked;
            this.selected.emit();
        } else {
            this.openExerciseModal().then();
        }
    }

    private async openExerciseModal() {
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

    getMetrics() {
        return this.exercise.type === 'REP' ? 'rep' : 's';
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }
}
