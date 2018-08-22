import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-observable-control',
  templateUrl: './observable-control.component.html',
  styleUrls: ['./observable-control.component.css']
})
export class ObservableControlComponent implements OnInit {

  nextVal: number;
  @Input()
  observable: Subject<any>;
  constructor() { }

  ngOnInit() {
  }

}
