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

  private notActiveStepStyle: string = 'not-active'
  private activeStepStyle: string = 'active'

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
    console.log(this.currentStep = positionCandidate);
    this.currentStep = positionCandidate;
  }

  private manageStepStyles(htmlButton: HTMLButtonElement) {
    // this.stepButtons
    //   .filter(element => element.nativeElement !== htmlButton)
    //   .forEach((element) => {
    //     element.nativeElement.classList.add(this.notActiveStepStyle);
    //     element.nativeElement.classList.remove(this.activeStepStyle);
    //   });

    htmlButton.classList.add(this.activeStepStyle);
    htmlButton.classList.remove(this.notActiveStepStyle);
  }
  
}
