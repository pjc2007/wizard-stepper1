import { Injectable } from '@angular/core';
import { StepPage } from './step-page';
import { StepPage1Component } from './step-page1/step-page1.component';
import { StepPage2Component } from './step-page2/step-page2.component';
import { StepPage3Component } from './step-page3/step-page3.component';

@Injectable({
  providedIn: 'root'
})
export class StepPagesService {

  constructor() { }

  public getSteps1(): Array<StepPage> {
    return [
      new StepPage1Component,
      new StepPage2Component,
      new StepPage3Component
    ];
  }
}
