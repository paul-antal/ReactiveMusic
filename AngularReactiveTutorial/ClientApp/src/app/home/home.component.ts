import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { zip, map, buffer, bufferCount, skip, take, merge } from 'rxjs/operators';
import { interval } from 'rxjs/observable/interval';
import { AudioPlayer} from '../player/audio-player.service';
import { song, rockSong } from '../songs';
import { Subject } from 'rxjs/Subject';
import { join } from 'path';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
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
