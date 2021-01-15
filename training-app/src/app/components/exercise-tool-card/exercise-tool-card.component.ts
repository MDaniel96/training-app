import {Component, Input} from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-exercise-tool-card',
    templateUrl: './exercise-tool-card.component.html',
    styleUrls: ['./exercise-tool-card.component.scss'],
})
export class ExerciseToolCardComponent {

    @Input() title: string;
    @Input() imageUrl: string;

    constructor(private platform: Platform) {
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }
}
