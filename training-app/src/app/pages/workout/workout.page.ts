import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {IonSlides, Platform} from '@ionic/angular';
import {HideHeaderDirective} from '../../directives/hide-header.directive';
import {fadeInAnimation} from '../../animations/fade-in.animation';

@Component({
    selector: 'app-workout',
    templateUrl: 'workout.page.html',
    styleUrls: ['workout.page.scss'],
    animations: [fadeInAnimation]
})
export class WorkoutPage implements AfterViewInit {

    @ViewChild('slider') slider: IonSlides;

    @ViewChild(HideHeaderDirective) hideHeaderDirective: HideHeaderDirective;

    exerciseTypes = ['bodyweight', 'gym', 'basic', 'trx', 'custom'];
    selectedExerciseType = 'bodyweight';

    loadedExerciseTypes = ['bodyweight'];

    currentMuscleGroup = null;
    stickyHeaderAnimState = 'in';

    showSlides = false;

    constructor(private platform: Platform) {
        this.preLoadWorkoutLists();
    }

    slideToExerciseType(id: string) {
        this.hideHeaderDirective.showHeader();
        const pageIndex = this.exerciseTypes.indexOf(id);
        this.slider.slideTo(pageIndex);
    }

    beforeExerciseTypeSlide() {
        this.currentMuscleGroup = null;
        this.hideHeaderDirective.showHeader();
    }

    onExerciseTypeSlide() {
        this.slider.getActiveIndex().then(sliderIndex => {
                this.selectedExerciseType = this.exerciseTypes[sliderIndex];
                document.getElementById(this.selectedExerciseType + 'Id').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center'
                });
            }
        );
    }

    currentMuscleGroupChanged(muscleGroup: string) {
        if (muscleGroup !== this.currentMuscleGroup) {
            this.stickyHeaderAnimState = 'out';
            setTimeout(() => this.stickyHeaderAnimState = 'in', 80);
        }
        this.currentMuscleGroup = muscleGroup;
    }

    preLoadWorkoutLists() {
        const interval = setInterval(() => {
            const lastLoadedExerciseType = this.loadedExerciseTypes[this.loadedExerciseTypes.length - 1];
            const nextExerciseTypeToLoadIndex = this.exerciseTypes.indexOf(lastLoadedExerciseType);
            this.loadedExerciseTypes.push(this.exerciseTypes[nextExerciseTypeToLoadIndex + 1]);
            if (this.loadedExerciseTypes.length === this.exerciseTypes.length) {
                clearInterval(interval);
            }
        }, 400);
    }

    isWorkoutListLoaded(exerciseType): boolean {
        return this.loadedExerciseTypes.includes(exerciseType);
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }

    // fix slider bug
    ngAfterViewInit(): void {
        setTimeout(() => {
            this.showSlides = true;
        }, 50);
    }
}