import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import { MatSliderModule } from '@angular/material/slider';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  encapsulation: ViewEncapsulation.None,
})


export class NewUserComponent implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;
  sliderValue:any;
  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 10;

  constructor() { }

  ngOnInit() {
  }

}
