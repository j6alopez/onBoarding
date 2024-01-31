import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Step } from '../../interfaces/step.interface';
import { AnimationMetadata, AnimationTriggerMetadata, animate, animation, group, query, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'escenes-escena',
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss',
  animations: [
    trigger('sliderAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(0%)', opacity: 1 }),
        animate('500ms ease-out', style({ transform: 'translateX(-100%)', opacity: 0})),
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms ease-in', style({ transform: 'translateX(0%)', opacity: 1 })),
      ]),
    ]),
  ],
})

export class EscenaComponent {

  @Input()
  public phrases: Step[] = [];
  public currentStep: number = 0;
  
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
    const positionCandidate = this.currentStep += position;
    if(positionCandidate < 0 || positionCandidate > this.maxPosition) {
      return;
    }
    this.currentStep = positionCandidate;

  }

}
