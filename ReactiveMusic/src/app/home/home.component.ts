import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { AudioPlayer } from '../player/audio-player.service';
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
