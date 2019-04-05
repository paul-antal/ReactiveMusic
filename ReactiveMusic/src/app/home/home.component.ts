import { Component, OnInit } from '@angular/core';
import { Observable, from, interval, zip, concat, } from 'rxjs';
import { AudioPlayer } from '../player/audio-player.service';
import { SongLibrary } from '../songs';
import { map, take, skip, skipLast } from 'rxjs/operators';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    obs: Observable<any>;
    timer: Observable<any>;
    constructor(private player: AudioPlayer) { }
    ngOnInit() {

    }
    start() {
    }
}
