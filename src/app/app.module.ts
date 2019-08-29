import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WizardStepperComponent } from './wizard-stepper/wizard-stepper.component';
import { MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';
import { StepPage1Component } from './step-page1/step-page1.component';
import { StepPage2Component } from './step-page2/step-page2.component';
import { StepPage3Component } from './step-page3/step-page3.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardStepperComponent,
    StepPage1Component,
    StepPage2Component,
    StepPage3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
