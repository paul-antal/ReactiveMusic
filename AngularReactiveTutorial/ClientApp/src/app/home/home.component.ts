import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { zip } from 'rxjs/operators'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor() { }

    firstObs = new Subject();
    secondObs = new Subject();
    thirdObs =  this.firstObs.pipe(zip(this.secondObs));
    ngOnInit() {}
}
