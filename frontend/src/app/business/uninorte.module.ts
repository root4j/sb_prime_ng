import { NgModule } from '@angular/core';
import { AppPrimeModule } from '../app.prime.module';
import { AppsComponent } from './components/apps/apps.component';
import { ParsComponent } from './components/pars/pars.component';
import { AplicacionService, ParametroService } from './services/uninorte.service';

@NgModule({
    imports: [
        AppPrimeModule
    ],
    declarations: [
        AppsComponent,
        ParsComponent
    ],
    providers: [
        AplicacionService,
        ParametroService
    ],
})
export class UninorteModule { }
