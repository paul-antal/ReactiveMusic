import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-observable',
    templateUrl: './observable.component.html',
    styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnChanges {

    @Input()
    observable: Observable<any>;

    events: IObservableMessage[] = [];
    subscription: Subscription;

    constructor() { }



    ngOnInit() {
        this.subscribe();
    }

    subscribe() {
        this.subscription = this.observable.subscribe((value) => {
            this.events.push({
                status: 'next',
                message: JSON.stringify(value)
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

    ngOnChanges(changes: SimpleChanges): void {
        this.events = [];
        this.observable = changes.observable.currentValue;
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.subscribe();
    }

}

export interface IObservableMessage {
    status: 'next' | 'completed' | 'error';
    message: any;
}
