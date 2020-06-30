// Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';

// Components
import { AnalyticsViewComponent } from './views/analytics-view/analytics-view.component';
import { AnalyticsRoutingModule } from './analytics-routing.module';

@NgModule({
    declarations: [
        AnalyticsViewComponent
    ],
    imports: [
        CommonModule,
        AnalyticsRoutingModule,
        NgxEchartsModule.forRoot({
            echarts
        })
    ],
    providers: [],
    exports: [
    ]
})
export class AnalyticsModule { }
