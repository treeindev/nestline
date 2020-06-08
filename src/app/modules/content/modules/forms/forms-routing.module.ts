// Dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormViewComponent } from './views/form-view/form-view.component';

const routes: Routes = [
    {
        path: '',
        component: FormViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormsRoutingModule { }
