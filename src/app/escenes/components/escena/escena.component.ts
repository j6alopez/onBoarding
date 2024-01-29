import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Step } from '../../interfaces/step.interface';

@Component({
  selector: 'escenes-escena',
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})
export class EscenaComponent implements OnChanges{
  
  @Input()
  public phrases: Step[] = [];
  public step!:Step;
  public currentStep: number = 0;

  moveToNextStep(): void{
    ++ this.currentStep;
    this.moveStep();
  }

  moveToPreviousStep(): void{
    -- this.currentStep;
    this.moveStep();
  }

  moveStep() {
    this.step = this.phrases[this.currentStep];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.step = this.phrases[this.currentStep];
  }

  
}
