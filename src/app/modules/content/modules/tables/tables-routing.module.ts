// Dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableViewComponent } from './views/table-view/table-view.component';

const routes: Routes = [
    {
        path: '',
        component: TableViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule { }
