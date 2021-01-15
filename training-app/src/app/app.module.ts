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
import {Tab3Page} from './pages/tab3/tab3.page';
import {TabsComponent} from './components/tabs/tabs.component';
import {AppPageRoutingModule} from './app-routing.module';
import {ExercisePage} from './pages/exercise/exercise.page';
import {Tab5Page} from './pages/tab5/tab5.page';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ExerciseToolCardComponent} from './components/exercise-tool-card/exercise-tool-card.component';

@NgModule({
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        IonicModule,
        CommonModule,
        FormsModule,
        AppPageRoutingModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        TabsComponent,
        ExerciseToolCardComponent,
        Tab1Page,
        Tab2Page,
        Tab3Page,
        ExercisePage,
        Tab5Page
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
