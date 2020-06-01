import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

// Modules
import { BasicsModule } from './modules/basics/basics.module';
import { ElementsModule } from './modules/elements/elements.module';
import { ContentRoutingModule } from './content-routing.module';

// Components
import { ContentComponent } from './content.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
    declarations: [
        ContentComponent,
        HeaderComponent,
        NavigationComponent
    ],
    imports: [ 
        CommonModule,
        ContentRoutingModule,
        BasicsModule,
        ElementsModule
    ],
    providers: [],
    exports: [
        ContentComponent
    ]
})
export class ContentModule { }
