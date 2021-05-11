import {Component, OnDestroy, ViewChild} from '@angular/core';
import {ExerciseService} from '../../service/exercise.service';
import {Exercise} from '../../model/exercise.model';
import {IonContent, IonHeader, NavController, Platform, ViewDidLeave} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {cloneDeep} from 'lodash';
import {Workout} from '../../model/workout.model';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-exercise-list',
    templateUrl: './exercise-list.page.html',
    styleUrls: ['./exercise-list.page.scss'],
})
export class ExerciseListPage implements ViewDidLeave, OnDestroy {

    @ViewChild(IonContent) content: IonContent;
    @ViewChild(IonHeader) header: IonHeader;

    exercises: Exercise[] = [];

    muscleGroups = ['abs', 'chest', 'shoulder', 'biceps', 'leg'];
    selectedMuscleGroup = 'abs';

    scrollInProgress = false;

    customWorkout: Workout;

    tool: string;

    routerSub: Subscription;

    constructor(private exerciseService: ExerciseService,
                private platform: Platform,
                private route: ActivatedRoute,
                private router: Router,
                private nav: NavController) {
        exerciseService.getAll().subscribe(exercises => {
            this.exercises = exercises;
            this.routerSub = this.route.params.subscribe(params => {
                this.tool = params.tool;
                this.exercises = this.exercises.filter(exercise => exercise.equipments.find(equipment => equipment === this.tool));
            });
        });
        this.getWorkoutFromRoute();
    }

    private getWorkoutFromRoute() {
        this.route.queryParams.subscribe(() => {
            const navigationState = this.router.getCurrentNavigation().extras.state;
            if (navigationState) {
                this.customWorkout = navigationState.workout;
            }
        });
    }

    scrollToMuscleGroup(id: string) {
        this.scrollInProgress = true;
        const yGroup = this.getOffsetTop(this.getListHeaderId(id));
        // @ts-ignore
        const headerHeight = this.header.el.offsetHeight;
        this.content.scrollToPoint(0, yGroup - headerHeight, 300).then(() => {
            this.scrollInProgress = false;
        });
    }

    onExercisesScroll(event: CustomEvent) {
        if (!this.scrollInProgress) {
            // @ts-ignore
            const headerHeight = this.header.el.offsetHeight;
            const yCurrent = event.detail.scrollTop + headerHeight + 20;

            let selected = false;
            this.muscleGroups.slice().reverse().forEach(muscleGroup => {
                if (yCurrent > this.getOffsetTop(this.getListHeaderId(muscleGroup)) && !selected) {
                    this.selectedMuscleGroup = muscleGroup;
                    this.scrollIntoView(this.getSegmentId(muscleGroup));
                    selected = true;
                }
            });
        }
    }

    getSegmentId(muscleGroup: string): string {
        return this.customWorkout ? muscleGroup + 'CustomExSegmentId' : muscleGroup + 'ExSegmentId';
    }

    getListHeaderId(muscleGroup: string): string {
        return this.customWorkout ? muscleGroup + 'CustomExListId' : muscleGroup + 'ExListId';
    }

    getOffsetTop(id: string): number {
        return document.getElementById(id).offsetTop;
    }

    scrollIntoView(id: string) {
        document.getElementById(id).scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
    }

    addSelectedToCustomWorkout() {
        const selectedExercises: Exercise[] = cloneDeep(this.exercises.filter(e => e.isSelected));
        selectedExercises.forEach(exercise => {
            exercise.isSelected = false;
            exercise.type = 'INTERVAL';
            exercise.amount = 30;
        });
        this.customWorkout.exercises.push(...selectedExercises);
        this.clearSelected();
        this.nav.navigateBack('workout-custom-edit');
    }

    ionViewDidLeave() {
        this.clearSelected();
    }

    clearSelected() {
        this.exercises.forEach(e => e.isSelected = false);
    }

    getSelectedNumber() {
        return this.exercises.filter(e => e.isSelected).length;
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }

    getExercisesForMuscleGroup(muscleGroup: string): Exercise[] {
        return this.exercises.filter(e => e.muscleGroups.indexOf(muscleGroup) > -1);
    }

    ngOnDestroy() {
        this.routerSub.unsubscribe();
    }
}
