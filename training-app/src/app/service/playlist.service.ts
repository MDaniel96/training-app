import {Injectable} from '@angular/core';
import {Playlist} from '../model/playlist.model';
// @ts-ignore
import playlistsJson from '../data/playlists.json';

@Injectable({providedIn: 'root'})
export class PlaylistService {

    getAll(): Playlist[] {
        return playlistsJson;
    }
}
