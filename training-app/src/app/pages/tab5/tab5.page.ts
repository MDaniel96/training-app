import {Component} from '@angular/core';
import {ThemeService} from '../../service/theme.service';

@Component({
    selector: 'app-tab5',
    templateUrl: './tab5.page.html',
    styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {

    constructor(private themeService: ThemeService) {
    }

    toggleDarkMode(event) {
        this.themeService.setTheme(event.detail.checked);
    }
}
