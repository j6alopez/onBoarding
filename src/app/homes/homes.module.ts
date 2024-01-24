import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { EscenesModule } from '../escenes/escenes.module';

@NgModule({
    imports: [EscenesModule],
    exports: [HomeComponent],
    declarations: [HomeComponent],
    providers: [],
})
export class HomesModule { }
