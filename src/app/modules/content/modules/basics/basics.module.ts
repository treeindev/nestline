// Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { BasicsRoutingModule } from './basics-routing.module';

// Components
import { BasicsComponent } from './basics.component';
import { TypographyComponent } from './views/typography/typography.component';
import { ColoursComponent } from './views/colours/colours.component';

@NgModule({
    declarations: [ 
        BasicsComponent,
        TypographyComponent,
        ColoursComponent
    ],
    imports: [
        CommonModule,
        BasicsRoutingModule
    ],
    providers: [],
    exports: [ 
        TypographyComponent,
        ColoursComponent
    ]
})
export class BasicsModule { }
