// Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ElementsRoutingModule } from './elements-routing.module';

// Components
import { ElementsComponent } from './elements.component';
import { TooltipViewComponent } from './views/tooltip-view/tooltip-view.component';
import { LoaderViewComponent } from './views/loader-view/loader-view.component';
import { BreadcrumbsViewComponent } from './views/breadcrumbs-view/breadcrumbs-view.component';
import { ButtonViewComponent } from './views/button-view/button-view.component';

@NgModule({
    declarations: [
        ElementsComponent,
        TooltipViewComponent, 
        LoaderViewComponent,
        BreadcrumbsViewComponent,
        ButtonViewComponent 
    ],
    imports: [ 
        CommonModule,
        ElementsRoutingModule
    ],
    providers: [],
    exports: [ 
        TooltipViewComponent,
        LoaderViewComponent,
        BreadcrumbsViewComponent
    ]
})
export class ElementsModule { }
