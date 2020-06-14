// Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';

// Components
import { LayoutComponent } from './layout.component';
import { CardsComponent } from './views/cards/cards.component';
import { GalleriesComponent } from './views/galleries/galleries.component';

@NgModule({
    declarations: [ 
        CardsComponent,
        LayoutComponent,
        GalleriesComponent
    ],
    imports: [
        CommonModule,
        LayoutRoutingModule
    ],
    providers: [],
    exports: []
})
export class LayoutModule { }
