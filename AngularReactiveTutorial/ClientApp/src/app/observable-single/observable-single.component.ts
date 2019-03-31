import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-observable-single',
  templateUrl: './observable-single.component.html',
  styleUrls: ['./observable-single.component.css']
})
export class ObservableSingleComponent implements OnInit {

  nextVal: number;
  @Input()
  observable: Subject<any>;
  constructor() { }

  ngOnInit() {
  }

}
