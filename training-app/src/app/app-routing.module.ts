import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {TabsComponent} from './components/tabs/tabs.component';
import {MyPlanPage} from './pages/my-plan/my-plan.page';
import {PlanPage} from './pages/plan/plan.page';
import {WorkoutPage} from './pages/workout/workout.page';
import {ExercisePage} from './pages/exercise/exercise.page';
import {Tab5Page} from './pages/tab5/tab5.page';
import {ExerciseListPage} from './pages/exercise-list/exercise-list.page';
import {WorkoutDetailPage} from './pages/workout-detail/workout-detail.page';
import {WorkoutCustomEditPage} from './pages/workout-custom-edit/workout-custom-edit.page';
import {PlanGroupPage} from './pages/plan-group/plan-group.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsComponent,
        children: [
            {
                path: 'my-plan',
                component: MyPlanPage
            },
            {
                path: 'plans',
                children: [
                    {
                        path: '',
                        component: PlanPage
                    },
                    {
                        path: 'plan-group',
                        component: PlanGroupPage
                    }
                ]
            },
            {
                path: 'workouts',
                component: WorkoutPage
            },
            {
                path: 'exercises',
                children: [
                    {
                        path: '',
                        component: ExercisePage
                    },
                    {
                        path: 'gym',
                        component: ExerciseListPage
                    }
                ]
            },
            {
                path: 'profile',
                component: Tab5Page
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'workout-detail',
        component: WorkoutDetailPage
    },
    {
        path: 'workout-custom-edit',
        children: [
            {
                path: '',
                component: WorkoutCustomEditPage
            },
            {
                path: 'add-exercises',
                component: ExercisePage
            },
            {
                path: 'add-exercises-select',
                component: ExerciseListPage
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/my-plan',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppPageRoutingModule {
}
