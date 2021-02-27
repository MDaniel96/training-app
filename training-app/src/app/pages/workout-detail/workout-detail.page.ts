import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {ExerciseService} from '../../service/exercise.service';
import {Workout} from '../../model/workout.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-workout-detail',
    templateUrl: './workout-detail.page.html',
    styleUrls: ['./workout-detail.page.scss'],
})
export class WorkoutDetailPage implements AfterViewInit {

    workout: Workout;
    custom: boolean;

    @ViewChild('title') title: ElementRef;

    headerMaxHeight: number;
    titleDistance = 0;

    constructor(private exerciseService: ExerciseService,
                private platform: Platform,
                private route: ActivatedRoute,
                private router: Router,
                private nav: NavController) {
        this.getWorkoutFromRoute();
    }

    private getWorkoutFromRoute() {
        this.route.queryParams.subscribe(() => {
            const navigationState = this.router.getCurrentNavigation().extras.state;
            if (navigationState) {
                this.workout = navigationState.workout;
                this.custom = navigationState.custom;
            }
        });
    }

    ngAfterViewInit() {
        this.headerMaxHeight = Math.round(window.innerHeight * 0.3);
    }

    resizeTitle(headerHeight: number) {
        this.titleDistance = (this.titleDistance === 0) ? (this.title.nativeElement.offsetLeft) : (this.titleDistance);
        const headerMinHeight = 96;
        const maxFontSize = 25;
        const fontSize = 20 + 5 * ((headerHeight - headerMinHeight) / (this.headerMaxHeight - headerMinHeight));
        const scaleRatio = fontSize / maxFontSize;
        const scale = `scale(${scaleRatio})`;
        const translateRatio = (1 - scaleRatio) / 0.2;
        const translate = `translateX(${this.titleDistance * translateRatio * (1 + (1 - scaleRatio)) * -1}px)`;
        this.title.nativeElement.style.transform = scale + translate;
    }

    editWorkout() {
        const navigationState = {workout: this.workout};
        this.nav.navigateForward('/workout-custom-edit', {state: navigationState});
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }
}
