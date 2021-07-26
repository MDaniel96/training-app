import {Component, OnDestroy, ViewChild} from '@angular/core';
import {NavController, Platform, ViewDidEnter} from '@ionic/angular';
import {Plan} from '../../model/plan.model';
import {PlanService} from '../../service/plan.service';
import {pageSlideAnimation} from '../../animations/page-slide.animation';
import {Workout} from '../../model/workout.model';
import {Subscription} from 'rxjs';
import {CircleProgressComponent} from 'ng-circle-progress';

@Component({
    selector: 'app-my-plan',
    templateUrl: 'my-plan.page.html',
    styleUrls: ['my-plan.page.scss']
})
export class MyPlanPage implements ViewDidEnter, OnDestroy {

    @ViewChild(CircleProgressComponent) circleProgressComponent;

    plan: Plan;
    myPlanSubscription: Subscription;

    workouts = ['Circuit training', 'HIIT', 'Interval training', 'Circuit training', 'Muscle building'];

    constructor(private platform: Platform,
                private nav: NavController,
                private planService: PlanService) {
        this.plan = planService.myPlan;
        this.myPlanSubscription = planService.myPlanSubject.subscribe(() => {
            this.plan = planService.myPlan;
        });
    }

    workout: Workout = {
        name: 'Day 1: Circuit Training',
        image: 'workout-img-1.png',
        duration: 38,
        type: 'STRENGTH',
        muscleGroups: 'Core, Upper Body',
        equipments: 'Med Ball, Dumbbell, Stretch band',
        intensity: 3,
        exercises: [
            {
                name: 'Ab Rollups',
                image: 'exercise-img-1.png',
                video: 'ab-rollups.mov',
                type: 'INTERVAL',
                amount: 30,
                muscleGroups: [
                    'ABS',
                    'SHOULDER'
                ],
                equipments: [
                    'PULL_UP_BAR'
                ],
                description: 'A push-up (or press-up in British English) is a common calisthenics exercise beginning from the prone position. By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids, with ancillary benefits to the rest of.',
                isSelected: false
            },
            {
                name: 'Bicycle Crunches',
                image: 'exercise-img-2.png',
                video: 'bicycle-crunches.mov',
                type: 'INTERVAL',
                amount: 45,
                muscleGroups: [
                    'ABS',
                    'LEG'
                ],
                equipments: [
                    'NO_EQUIPMENT'
                ],
                description: 'A push-up (or press-up in British English) is a common calisthenics exercise beginning from the prone position. By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids, with ancillary benefits to the rest of.',
                isSelected: false
            },
            {
                name: 'Abdominal Hip Raises',
                image: 'exercise-img-3.png',
                video: 'abdominal-hip-raises.mov',
                type: 'REP',
                amount: 12,
                muscleGroups: [
                    'ABS',
                    'BICEPS'
                ],
                equipments: [
                    'DUMBELL',
                    'BARBELL'
                ],
                description: 'A push-up (or press-up in British English) is a common calisthenics exercise beginning from the prone position. By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids, with ancillary benefits to the rest of.',
                isSelected: false
            },
            {
                name: 'Narrow Push Ups',
                image: 'exercise-img-4.png',
                video: 'narrow-push-up.mov',
                type: 'REP',
                amount: 20,
                muscleGroups: [
                    'ABS'
                ],
                equipments: [
                    'NO_EQUIPMENT'
                ],
                description: 'A push-up (or press-up in British English) is a common calisthenics exercise beginning from the prone position. By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids, with ancillary benefits to the rest of.',
                isSelected: false
            },
            {
                name: 'Kneeled Push Ups',
                image: 'exercise-img-5.png',
                video: 'kneeled-push-ups.mov',
                type: 'INTERVAL',
                amount: 40,
                muscleGroups: [
                    'ABS'
                ],
                equipments: [
                    'NO_EQUIPMENT',
                    'DUMBELL'
                ],
                description: 'A push-up (or press-up in British English) is a common calisthenics exercise beginning from the prone position. By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids, with ancillary benefits to the rest of.',
                isSelected: false
            },
            {
                name: 'Crunches',
                image: 'exercise-img-6.png',
                video: 'crunches.mov',
                type: 'REP',
                amount: 30,
                muscleGroups: [
                    'ABS'
                ],
                equipments: [
                    'NO_EQUIPMENT'
                ],
                description: 'A push-up (or press-up in British English) is a common calisthenics exercise beginning from the prone position. By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids, with ancillary benefits to the rest of.',
                isSelected: false
            },
            {
                name: 'Crunches',
                image: 'exercise-img-6.png',
                video: 'crunches.mov',
                type: 'INTERVAL',
                amount: 15,
                muscleGroups: [
                    'ABS'
                ],
                equipments: [
                    'NO_EQUIPMENT'
                ],
                description: 'A push-up (or press-up in British English) is a common calisthenics exercise beginning from the prone position. By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids, with ancillary benefits to the rest of.',
                isSelected: false
            }
        ]
    };

    selectWorkout() {
        const navigationState = {workout: this.workout, custom: false};
        this.nav.navigateForward('/workout-detail',
            this.isIos() ? {state: navigationState} : {state: navigationState, animation: pageSlideAnimation}
        );
    }

    showPlanDetails() {
        const navigationState = {plan: this.plan, isMyPlan: true};
        this.nav.navigateForward('/plan-detail',
            this.isIos() ? {state: navigationState} : {state: navigationState, animation: pageSlideAnimation}
        );
    }

    choosePlan() {
        this.nav.navigateRoot('/tabs/plans');
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }

    ionViewDidEnter() {
        this.circleProgressComponent.render();
    }

    ngOnDestroy() {
        this.myPlanSubscription.unsubscribe();
    }
}
