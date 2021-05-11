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
import {ExerciseToolCardComponent} from './components/exercise/exercise-tool-card/exercise-tool-card.component';
import {ExerciseListPage} from './pages/exercise-list/exercise-list.page';
import {ExerciseItemComponent} from './components/exercise/exercise-item/exercise-item.component';
import {ExerciseDetailsComponent} from './components/exercise/exercise-details/exercise-details.component';
import {WorkoutListComponent} from './components/workout/workout-list/workout-list.component';
import {WorkoutItemComponent} from './components/workout/workout-item/workout-item.component';
import {HideHeaderDirective} from './directives/hide-header.directive';
import {WorkoutDetailPage} from './pages/workout-detail/workout-detail.page';
import {HidenavModule} from 'ionic4-hidenav';
import {CustomWorkoutListComponent} from './components/workout/custom-workout-list/custom-workout-list.component';
import {CustomWorkoutItemComponent} from './components/workout/custom-workout-item/custom-workout-item.component';
import {WorkoutCustomEditPage} from './pages/workout-custom-edit/workout-custom-edit.page';
import {CustomAmountPopoverComponent} from './components/workout/custom-amount-popover/custom-amount-popover.component';
import {SelectPlaylistPanelComponent} from './components/panel/select-playlist-panel/select-playlist-panel.component';
import {AddToWorkoutPanelComponent} from './components/panel/add-to-workout-panel/add-to-workout-panel.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        IonicModule,
        CommonModule,
        HttpClientModule,
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
        CustomWorkoutListComponent,
        CustomWorkoutItemComponent,
        CustomAmountPopoverComponent,
        SelectPlaylistPanelComponent,
        AddToWorkoutPanelComponent,
        Tab1Page,
        Tab2Page,
        WorkoutPage,
        WorkoutDetailPage,
        WorkoutCustomEditPage,
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
