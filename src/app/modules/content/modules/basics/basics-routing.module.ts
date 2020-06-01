import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColoursComponent } from './views/colours/colours.component';
import { TypographyComponent } from './views/typography/typography.component';
import { BasicsComponent } from './basics.component';

const routes: Routes = [
    {
        path: '',
        component: BasicsComponent,
        children: [
            {
                path: 'typography',
                component: TypographyComponent
            },
            {
                path: 'colours',
                component: ColoursComponent
            },
            {
                path: '',
                redirectTo: 'typography',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BasicsRoutingModule { }
