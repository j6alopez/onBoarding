import { Component, Input } from '@angular/core';
import { Step } from '../../interfaces/step.interface';

@Component({
  selector: 'escenes-escena',
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})
export class EscenaComponent {
  @Input()
  public phrases: Step[] = [];
  public currentStep: number = 0;

  moveToNextStep(): void{
    ++ this.currentStep;
  }

  moveToPreviousStep(): void{
    -- this.currentStep;
  }
}
