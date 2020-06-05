// Dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ElementsComponent } from './elements.component';
import { BreadcrumbsViewComponent } from './views/breadcrumbs-view/breadcrumbs-view.component';
import { LoaderViewComponent } from './views/loader-view/loader-view.component';
import { TooltipViewComponent } from './views/tooltip-view/tooltip-view.component';
import { ButtonViewComponent } from './views/button-view/button-view.component';

const routes: Routes = [
    {
        path: '',
        component: ElementsComponent,
        children: [
            {
                path: 'buttons',
                component: ButtonViewComponent
            },
            {
                path: 'breadcrumbs',
                component: BreadcrumbsViewComponent
            },
            {
                path: 'loaders',
                component: LoaderViewComponent
            },
            {
                path: 'tooltips',
                component: TooltipViewComponent
            },
            {
                path: '',
                redirectTo: 'breadcrumbs',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ElementsRoutingModule { }
