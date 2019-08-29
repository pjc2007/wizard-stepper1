import { Component, OnInit } from '@angular/core';
import { StepPage } from '../step-page';

@Component({
  selector: 'app-step-page1',
  templateUrl: './step-page1.component.html',
  styleUrls: ['./step-page1.component.scss']
})
export class StepPage1Component implements OnInit, StepPage {
  constructor() { }

  ngOnInit() {
  }
}
