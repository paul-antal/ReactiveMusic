import { Component, OnInit } from '@angular/core';
import { Observable ,  from ,  interval ,  Subject } from 'rxjs';
import { zip, map, buffer, bufferCount, skip, take, merge } from 'rxjs/operators';
import { AudioPlayer} from '../player/audio-player.service';
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
        this.timer = interval(1000);
    }
}
