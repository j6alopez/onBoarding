import { NgModule } from '@angular/core';
import { EscenaComponent } from './components/escena/escena.component';
import { CommonModule } from '@angular/common';
import { StepIndicatorComponent } from './components/indicator/step-indicator/step-indicator.component';


@NgModule({
    imports: [CommonModule],
    exports: [EscenaComponent],
    declarations: [EscenaComponent, StepIndicatorComponent],
    providers: [],
})
export class EscenesModule { }
