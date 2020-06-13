// Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';

// Components
import { TablesRoutingModule } from './tables-routing.module';
import { TableViewComponent } from './views/table-view/table-view.component';

@NgModule({
    declarations: [
        TableViewComponent
    ],
    imports: [
        CommonModule,
        TablesRoutingModule
    ],
    providers: [],
    exports: [
        TableViewComponent
    ]
})
export class TablesModule { }
