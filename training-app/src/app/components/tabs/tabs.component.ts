import {Component} from '@angular/core';
import {foldAnimation} from '../../animations/fold.animation';
import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.component.html',
    styleUrls: ['tabs.component.scss'],
    animations: [foldAnimation]
})
export class TabsComponent {

    selectedTab: string;

    constructor(private platform: Platform) {
    }

    isSelected(tab: string): boolean {
        return this.selectedTab === tab;
    }

    getLabelStyle(tab: string) {
        if (this.isIos()) {
            return this.isSelected(tab) ? 'ios-font ios-selected' : 'ios-font';
        }
    }

    isIos(): boolean {
        return this.platform.is('ios');
    }
}
