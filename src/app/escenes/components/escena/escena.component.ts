import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Step } from '../../interfaces/step.interface';
import { AnimationMetadata, AnimationTriggerMetadata, animate, animation, group, query, state, style, transition, trigger } from '@angular/animations';


const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '200px' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-200px)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(200px)' }))], {
      optional: true,
    }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '200px' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(200px)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-200px)' }))], {
      optional: true,
    }),
  ]),
];

@Component({
  selector: 'escenes-escena',
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss',
  animations: [
    trigger('animImageSlider', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ]
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
