import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {Workout} from '../../model/workout.model';
import {ExerciseToolService} from '../../service/exercise-tool.service';
import {ExerciseTool} from '../../model/exercise-tool.model';

@Component({
    selector: 'app-exercise',
    templateUrl: './exercise.page.html',
    styleUrls: [
        './exercise.page.scss',
        '../../components/exercise/exercise-tool-card/exercise-tool-card.component.scss'
    ],
})
export class ExercisePage {

    customWorkout: Workout;

    tools: ExerciseTool[] = [];

    constructor(public exerciseToolService: ExerciseToolService,
                private platform: Platform,
                private route: ActivatedRoute,
                private router: Router) {
        this.getWorkoutFromRoute();
        this.tools = this.exerciseToolService.exerciseTools;
    }

    private getWorkoutFromRoute() {
        this.route.queryParams.subscribe(() => {
            const navigationState = this.router.getCurrentNavigation().extras.state;
            if (navigationState) {
                this.customWorkout = navigationState.workout;
            }
        });
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }
}
