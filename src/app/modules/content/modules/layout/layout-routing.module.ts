// Dependencies
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { LayoutComponent } from './layout.component';
import { CardsComponent } from './views/cards/cards.component';
import { GalleriesComponent } from './views/galleries/galleries.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'cards',
                component: CardsComponent
            },
            {
                path: 'galleries',
                component: GalleriesComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
