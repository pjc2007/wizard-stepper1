import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { MatStepper } from '@angular/material';
import { StepPagesService } from '../step-pages.service';
import { StepPage } from '../step-page';
import { StepPage1Component } from '../step-page1/step-page1.component';
import { StepPage2Component } from '../step-page2/step-page2.component';
import { StepPage3Component } from '../step-page3/step-page3.component';

@Component({
  selector: 'app-wizard-stepper',
  templateUrl: './wizard-stepper.component.html',
  styleUrls: ['./wizard-stepper.component.scss']
})
export class WizardStepperComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  totalStepsCount: number;

  public steps: StepPage[];

  constructor(private stepsService: StepPagesService) { 
    this.steps = [
      new StepPage1Component,
      new StepPage2Component,
      new StepPage3Component
    ]
  }

  public ngOnInit(): void {}

  public ngAfterViewInit() : void {
    this.totalStepsCount = this.myStepper._steps.length;
  }

  public goBack(stepper: MatStepper) : void {
    stepper.previous();
  }
  public  goForward(stepper: MatStepper) : void {
    stepper.selectedIndex = 2;
  }
}
