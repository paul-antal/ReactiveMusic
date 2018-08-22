import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, finalize } from 'rxjs/operators';

@Component({
    selector: 'app-observable',
    templateUrl: './observable.component.html',
    styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

    @Input()
    observable: Observable<any>;

    events: IObservableMessage[] = [];

    constructor() { }



    ngOnInit() {
        this.observable.subscribe((value) => {
            this.events.push({
                status: 'next',
                message: value
            });
        }, (err) => {
            this.events.push({
                status: 'error',
                message: err
            });
        }, () => {
            this.events.push({
                status: 'completed',
                message: 'complete'
            });
        });
    }

}

export interface IObservableMessage {
    status: 'next' | 'completed' | 'error';
    message: any;
}
