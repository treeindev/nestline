import { NgModule } from '@angular/core';
import { CookiesService } from './services/cookies.service';
import { UtilsService } from './services/utils.service';

@NgModule({
    declarations: [],
    imports: [],
    providers: [
        CookiesService,
        UtilsService
    ],
    exports: []
})
export class SharedModule { }
