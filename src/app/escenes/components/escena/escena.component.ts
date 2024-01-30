import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Step } from '../../interfaces/step.interface';

@Component({
  selector: 'escenes-escena',
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss',
  animations: []
})
export class EscenaComponent {

  @Input()
  public phrases: Step[] = [];
  public  currentStep: number = 0;
  
  private maxPosition: number = 0;

  isFirstStep(): boolean {
    return this.currentStep === 0;
  }

  isLastStep(): boolean {
    return this.currentStep === this.phrases.length -1;
  }

  handleClickOnStep(event: Event, step: number) {
    this.currentStep = step;
  }

  handleClickOnArrowButton(position: number): void {
    console.log('aquiiii');
    const positionCandidate = this.currentStep += position;
    console.log(positionCandidate, this.maxPosition);
    if(positionCandidate < 0 || positionCandidate > this.maxPosition) {
      return;
    }
    this.currentStep = positionCandidate;
  }

}
