import {Component} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {PlaylistService} from '../../../service/playlist.service';

@Component({
    selector: 'app-select-playlist-panel',
    templateUrl: './select-playlist-panel.component.html',
    styleUrls: ['./select-playlist-panel.component.scss'],
})
export class SelectPlaylistPanelComponent {

    constructor(private menu: MenuController,
                public playlistService: PlaylistService) {
    }

    async open() {
        await this.menu.enable(true, 'select-playlist');
        await this.menu.open('select-playlist');
    }

    async close() {
        await this.menu.close('select-playlist');
    }
}
