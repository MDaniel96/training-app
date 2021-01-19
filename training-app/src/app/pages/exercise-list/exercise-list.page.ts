import {Component, ViewChild} from '@angular/core';
import {ExerciseService} from '../../service/exercise.service';
import {Exercise} from '../../model/exercise.model';
import {IonContent, IonHeader, Platform} from '@ionic/angular';

@Component({
    selector: 'app-exercise-list',
    templateUrl: './exercise-list.page.html',
    styleUrls: ['./exercise-list.page.scss'],
})
export class ExerciseListPage {

    @ViewChild(IonContent) content: IonContent;
    @ViewChild(IonHeader) header: IonHeader;

    exercises: Exercise[];

    muscleGroups = ['abs', 'chest', 'shoulder', 'biceps', 'leg'];
    selectedMuscleGroup = 'abs';

    scrollInProgress = false;

    constructor(private exerciseService: ExerciseService,
                private platform: Platform) {
        this.exercises = exerciseService.getExercises();
    }

    scrollToMuscleGroup(id: string) {
        this.scrollInProgress = true;
        const yGroup = this.getOffsetTop(id);
        // @ts-ignore
        const headerHeight = this.header.el.offsetHeight;
        this.content.scrollToPoint(0, yGroup - headerHeight, 300).then(() => {
            this.scrollInProgress = false;
        });
    }

    onMuscleGroupsScroll(event: CustomEvent) {
        if (!this.scrollInProgress) {
            // @ts-ignore
            const headerHeight = this.header.el.offsetHeight;
            const yCurrent = event.detail.scrollTop + headerHeight + 20;

            if (yCurrent > this.getOffsetTop('leg')) {
                this.selectedMuscleGroup = 'leg';
                this.scrollIntoView('legId');
            } else if (yCurrent > this.getOffsetTop('biceps')) {
                this.selectedMuscleGroup = 'biceps';
                this.scrollIntoView('bicepsId');
            } else if (yCurrent > this.getOffsetTop('shoulder')) {
                this.selectedMuscleGroup = 'shoulder';
                this.scrollIntoView('shoulderId');
            } else if (yCurrent > this.getOffsetTop('chest')) {
                this.selectedMuscleGroup = 'chest';
                this.scrollIntoView('chestId');
            } else if (yCurrent > this.getOffsetTop('abs')) {
                this.selectedMuscleGroup = 'abs';
                this.scrollIntoView('absId');
            }
        }
    }

    getOffsetTop(id: string): number {
        return document.getElementById(id).offsetTop;
    }

    scrollIntoView(id: string) {
        document.getElementById(id).scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
    }

    capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }
}