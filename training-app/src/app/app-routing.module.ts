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
                path: 'tab1',
                component: Tab1Page
            },
            {
                path: 'tab2',
                component: Tab2Page
            },
            {
                path: 'tab3',
                component: Tab3Page
            },
            {
                path: 'tab4',
                component: Tab4Page
            },
            {
                path: 'tab5',
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
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppPageRoutingModule {
}
