import {AfterViewInit, Component, Input} from '@angular/core';
import {Exercise} from '../../model/exercise.model';
import {fadeInAnimation} from '../../animations/fade-in.animation';

@Component({
    selector: 'app-exercise-details',
    templateUrl: './exercise-details.component.html',
    styleUrls: ['./exercise-details.component.scss'],
    animations: [fadeInAnimation]
})
export class ExerciseDetailsComponent implements AfterViewInit {

    @Input() exercise: Exercise;

    showSlides = false;
    state = 'out';

    // fix slide bug on second modal open
    ngAfterViewInit(): void {
        setTimeout(() => {
            this.showSlides = true;
        }, 0);
    }

    removeDashes(str: string): string {
        return str.replace(/_/g, ' ');
    }
}
