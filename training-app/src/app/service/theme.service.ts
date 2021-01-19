import {Injectable} from '@angular/core';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Injectable({providedIn: 'root'})
export class ThemeService {

    constructor(private statusBar: StatusBar) {
    }

    init() {
        this.statusBar.overlaysWebView(false);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.setTheme(prefersDark.matches);
        prefersDark.addListener((mediaQuery) => this.setTheme(mediaQuery.matches));
    }

    setTheme(isDark: boolean) {
        document.body.classList.toggle('dark', isDark);
        if (isDark) {
            this.statusBar.backgroundColorByHexString('#373535');
            this.statusBar.styleLightContent();
        } else {
            this.statusBar.backgroundColorByHexString('#ffffff');
            this.statusBar.styleDefault();
        }
    }
}
