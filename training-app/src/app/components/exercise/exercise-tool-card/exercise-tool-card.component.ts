import {Component, Input} from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {pageSlideAnimation} from '../../../animations/page-slide.animation';

@Component({
    selector: 'app-exercise-tool-card',
    templateUrl: './exercise-tool-card.component.html',
    styleUrls: ['./exercise-tool-card.component.scss'],
})
export class ExerciseToolCardComponent {

    @Input() title: string;
    @Input() imageUrl: string;

    constructor(private platform: Platform,
                private nav: NavController) {
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }

    selectTool() {
        this.nav.navigateForward('/tabs/exercises/gym', this.isIos() ? {} : {animation: pageSlideAnimation});
    }
}
