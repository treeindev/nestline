import { NgModule } from '@angular/core';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        DashboardComponent,
        HeaderComponent
    ],
    imports: [],
    providers: [],
    exports: [
        DashboardComponent,
    ]
})
export class DashboardModule { }
