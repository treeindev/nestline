import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content.component';

const routes: Routes = [
    {
        path: '',
        component: ContentComponent,
        children: [
            {
                path: 'basics',
                loadChildren: () => import('./modules/basics/basics.module')
                    .then(m => m.BasicsModule)
            },
            {
                path: 'elements',
                loadChildren: () => import('./modules/elements/elements.module')
                    .then(m => m.ElementsModule)
            },
            {
                path: 'forms',
                loadChildren: () => import('./modules/forms/forms.module')
                    .then(m => m.FormsModule)
            },
            {
                path: 'tables',
                loadChildren: () => import('./modules/tables/tables.module')
                    .then(m => m.TablesModule)
            },
            {
                path: 'layout',
                loadChildren: () => import('./modules/layout/layout.module')
                    .then(m => m.LayoutModule)
            },
            {
                path: 'analytics',
                loadChildren: () => import('./modules/analytics/analytics.module')
                    .then(m => m.AnalyticsModule)
            },
            {
                path: '',
                redirectTo: 'basics',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContentRoutingModule { }
