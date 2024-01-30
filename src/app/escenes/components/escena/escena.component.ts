import { AfterViewInit, Component, ElementRef, Input, OnChanges, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Step } from '../../interfaces/step.interface';

@Component({
  selector: 'escenes-escena',
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})
export class EscenaComponent implements OnChanges {

  @Input()
  public phrases: Step[] = [];

  @ViewChildren('stepButton')
  public stepButtons!:QueryList<ElementRef<HTMLButtonElement>>;

  public step!:Step;
  public currentStep: number = 0;

  private notActiveStepStyle: string = 'not-active'
  private activeStepStyle: string = 'active'
  private maxPosition: number = 0;

  isFirstStep(): boolean {
    return this.currentStep === 0;
  }

  isLastStep(): boolean {
    const maxPosition = this.phrases.length -1;
    return this.currentStep === maxPosition;
  }

  handleClickOnStep(event: Event, step: number) {
    this.currentStep = step;
    this.step = this.phrases[this.currentStep];
    this.manageStepStyles( event.target as HTMLButtonElement);
  }

  handleClickOnArrowButton(position: number): void {
    const positionCandidate = this.currentStep += position;
    if(positionCandidate < 0 || positionCandidate > this.maxPosition) {
      return;
    }
    this.currentStep = positionCandidate;
    this.step = this.phrases[this.currentStep];
    const activeStep: HTMLButtonElement = this.stepButtons.get(this.currentStep)!.nativeElement;
    this.manageStepStyles(activeStep);
  }

  private manageStepStyles(htmlButton: HTMLButtonElement) {
    this.stepButtons
      .filter(element => element.nativeElement !== htmlButton)
      .forEach((element) => {
        element.nativeElement.classList.add(this.notActiveStepStyle);
        element.nativeElement.classList.remove(this.activeStepStyle);
      });

    htmlButton.classList.add(this.activeStepStyle);
    htmlButton.classList.remove(this.notActiveStepStyle);
  }

  //Events

  ngOnChanges(changes: SimpleChanges): void {
    this.step = this.phrases[this.currentStep];
    this.maxPosition = this.phrases.length - 1;
  }
  
}
