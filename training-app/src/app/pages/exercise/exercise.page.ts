import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-exercise',
    templateUrl: './exercise.page.html',
    styleUrls: [
        './exercise.page.scss',
        '../../components/exercise-tool-card/exercise-tool-card.component.scss'
    ],
})
export class ExercisePage {

    constructor(private platform: Platform) {
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }
}
