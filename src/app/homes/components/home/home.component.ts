import { Component } from '@angular/core';
import { StepsService } from '../../../escenes/services/steps.service';
import { Step } from '../../../escenes/interfaces/step.interface';

@Component({
  selector: 'homes-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private  service: StepsService) {

  }

  get phrases() : Step[] {
    return [...this.service.phrases];
  }

}
