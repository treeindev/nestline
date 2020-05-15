import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipViewComponent } from './views/tooltip-view/tooltip-view.component';
import { LoaderViewComponent } from './views/loader-view/loader-view.component';
import { BreadcrumbsViewComponent } from './views/breadcrumbs-view/breadcrumbs-view.component';

@NgModule({
    declarations: [ 
        TooltipViewComponent, 
        LoaderViewComponent,
        BreadcrumbsViewComponent 
    ],
    imports: [ CommonModule ],
    providers: [],
    exports: [ 
        TooltipViewComponent,
        LoaderViewComponent,
        BreadcrumbsViewComponent
    ]
})
export class ElementsModule { }
