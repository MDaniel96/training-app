import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {TabsComponent} from './components/tabs/tabs.component';
import {Tab1Page} from './pages/tab1/tab1.page';
import {Tab2Page} from './pages/tab2/tab2.page';
import {Tab3Page} from './pages/tab3/tab3.page';
import {Tab4Page} from './pages/tab4/tab4.page';
import {Tab5Page} from './pages/tab5/tab5.page';

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
                component: Tab3Page
            },
            {
                path: 'exercises',
                component: Tab4Page
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
