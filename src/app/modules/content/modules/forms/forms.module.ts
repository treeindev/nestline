// Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { FormsRoutingModule } from './forms-routing.module';
import { FormViewComponent } from './views/form-view/form-view.component';

@NgModule({
    declarations: [
        FormViewComponent
    ],
    imports: [
        CommonModule,
        FormsRoutingModule
    ],
    providers: [],
    exports: [
        FormViewComponent
    ]
})
export class FormsModule { }
