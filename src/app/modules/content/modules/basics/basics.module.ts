import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from './views/typography/typography.component';
import { ColoursComponent } from './views/colours/colours.component';

@NgModule({
    declarations: [ 
        TypographyComponent,
        ColoursComponent
    ],
    imports: [ CommonModule ],
    providers: [],
    exports: [ 
        TypographyComponent,
        ColoursComponent
    ]
})
export class BasicsModule { }
