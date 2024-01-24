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
}
