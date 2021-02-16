import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {TabsComponent} from './components/tabs/tabs.component';
import {Tab1Page} from './pages/tab1/tab1.page';
import {Tab2Page} from './pages/tab2/tab2.page';
import {WorkoutPage} from './pages/workout/workout.page';
import {ExercisePage} from './pages/exercise/exercise.page';
import {Tab5Page} from './pages/tab5/tab5.page';
import {ExerciseListPage} from './pages/exercise-list/exercise-list.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsComponent,
        children: [
            {
                path: 'my-plan',
                component: Tab1Page
            },
            {
                path: 'plans',
                component: Tab2Page
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
        path: '',
        redirectTo: '/tabs/workouts',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppPageRoutingModule {
}
