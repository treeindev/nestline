import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipViewComponent } from './views/tooltip-view/tooltip-view.component';
import { LoaderViewComponent } from './views/loader-view/loader-view.component';

@NgModule({
    declarations: [ 
        TooltipViewComponent, 
        LoaderViewComponent 
    ],
    imports: [ CommonModule ],
    providers: [],
    exports: [ 
        TooltipViewComponent,
        LoaderViewComponent
    ]
})
export class ElementsModule { }
