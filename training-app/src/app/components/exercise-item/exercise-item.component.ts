import {Component, Input} from '@angular/core';
import {Exercise} from '../../model/exercise.model';
import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-exercise-item',
    templateUrl: './exercise-item.component.html',
    styleUrls: ['./exercise-item.component.scss'],
})
export class ExerciseItemComponent {

    @Input() exercise: Exercise;

    constructor(private platform: Platform) {
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }
}
