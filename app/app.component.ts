import { Component } from '@angular/core';

import { HeroParentComponent } from './hero-parent.component';
import { NameParentComponent } from './name-parent.component';
import { VersionParentComponent } from './version-parent.component';
import { VoteTakerComponent } from './votetaker.component';
import { CountdownLocalVarParentComponent,
        CountdownViewChildParentComponent } from './countdown-parent.component';
import { MissionControlComponent } from './missioncontrol.component';
import { CounterComponent } from './counter.component';

let directives: any[] = [
    HeroParentComponent,
    NameParentComponent,
    VersionParentComponent,
    VoteTakerComponent,
    MissionControlComponent,
    CounterComponent
  ];

  let styles = [`
    .app {
      display: block;
      text-align: center;
      padding: 25px;
      background: #f5f5f5;
    }
  `];

// Include Countdown examples
// unless in e2e tests which they break.
if (!/e2e/.test(location.search)) {
  console.log('adding countdown timer examples');
  directives.push(CountdownLocalVarParentComponent);
  directives.push(CountdownViewChildParentComponent);
}

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styles: styles,
  directives: directives
})
export class AppComponent {

private myValue: number = 2;

  myValueChange(value:number) {
    console.log(value);
    this.myValue = value;
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
