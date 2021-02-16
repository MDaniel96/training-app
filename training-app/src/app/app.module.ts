import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy, RouterModule} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab1Page} from './pages/tab1/tab1.page';
import {Tab2Page} from './pages/tab2/tab2.page';
import {WorkoutPage} from './pages/workout/workout.page';
import {TabsComponent} from './components/tabs/tabs.component';
import {AppPageRoutingModule} from './app-routing.module';
import {ExercisePage} from './pages/exercise/exercise.page';
import {Tab5Page} from './pages/tab5/tab5.page';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ExerciseToolCardComponent} from './components/exercise-tool-card/exercise-tool-card.component';
import {ExerciseListPage} from './pages/exercise-list/exercise-list.page';
import {ExerciseItemComponent} from './components/exercise-item/exercise-item.component';
import {ExerciseDetailsComponent} from './components/exercise-details/exercise-details.component';
import {WorkoutListComponent} from './components/workout-list/workout-list.component';
import {WorkoutItemComponent} from './components/workout-item/workout-item.component';
import {HideHeaderDirective} from './directives/hide-header.directive';
import {WorkoutDetailPage} from './pages/workout-detail/workout-detail.page';
import {HidenavModule} from 'ionic4-hidenav';

@NgModule({
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        IonicModule,
        CommonModule,
        FormsModule,
        AppPageRoutingModule,
        BrowserAnimationsModule,
        HidenavModule
    ],
    declarations: [
        AppComponent,
        TabsComponent,
        ExerciseToolCardComponent,
        ExerciseItemComponent,
        ExerciseDetailsComponent,
        WorkoutListComponent,
        WorkoutItemComponent,
        Tab1Page,
        Tab2Page,
        WorkoutPage,
        WorkoutDetailPage,
        ExercisePage,
        ExerciseListPage,
        Tab5Page,
        HideHeaderDirective
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    entryComponents: [],
    bootstrap: [AppComponent],
    exports: [RouterModule]
})
export class AppModule {
}
