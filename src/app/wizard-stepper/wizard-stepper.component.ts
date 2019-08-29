import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';
import { StepPagesService } from '../step-pages.service';
import { StepPage } from '../step-page';


@Component({
  selector: 'app-wizard-stepper',
  templateUrl: './wizard-stepper.component.html',
  styleUrls: ['./wizard-stepper.component.scss']
})
export class WizardStepperComponent implements OnInit {

  @ViewChild('stepper') private myStepper: MatStepper;
  totalStepsCount: number;

  public steps: StepPage[];

  constructor(private stepsService: StepPagesService) { }

  public ngOnInit(): void {
    this.steps = this.stepsService.getSteps1();
  }

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
