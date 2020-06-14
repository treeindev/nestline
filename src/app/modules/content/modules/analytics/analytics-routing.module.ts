// Dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalyticsViewComponent } from './views/analytics-view/analytics-view.component';

const routes: Routes = [
    {
        path: '',
        component: AnalyticsViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
