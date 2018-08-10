import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-precases',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './precases.component.html',
  styleUrls: ['./precases.component.css'],
})
export class PrecasesComponent implements OnInit {
  show: boolean = false;
  location:Location;
  router : Router;

  constructor(location:Location ,router: Router) {
    this.router = router;
    // console.log(location.path());
    console.log(location.path());
  }
  filter1(){
    this.show = this.show === true ? false : true;
  }
  functionCalledOnContinue(){
    // this.router.events.subscribe('')
  }
  ngOnInit() {
  }

}
