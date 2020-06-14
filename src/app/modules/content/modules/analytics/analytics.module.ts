// Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { AnalyticsViewComponent } from './views/analytics-view/analytics-view.component';
import { AnalyticsRoutingModule } from './analytics-routing.module';

@NgModule({
    declarations: [
        AnalyticsViewComponent
    ],
    imports: [
        CommonModule,
        AnalyticsRoutingModule
    ],
    providers: [],
    exports: [
    ]
})
export class AnalyticsModule { }
