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

    @Input() selectable: boolean;
    @Input() hasAmount: boolean;
    @Input() custom: boolean;

    @Output() selected = new EventEmitter<void>();

    constructor(private platform: Platform,
                private modalController: ModalController) {
    }

    selectExercise() {
        if (this.selectable) {
            this.exercise.isSelected = !this.exercise.isSelected;
            this.selected.emit();
        } else {
            this.showExerciseDetails().then();
        }
    }

    private async showExerciseDetails() {
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
