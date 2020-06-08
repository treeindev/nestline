import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

// Modules
import { BasicsModule } from './modules/basics/basics.module';
import { ElementsModule } from './modules/elements/elements.module';
import { ContentRoutingModule } from './content-routing.module';
import { FormsModule } from './modules/forms/forms.module';

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
        ElementsModule,
        FormsModule
    ],
    providers: [],
    exports: [
        ContentComponent
    ]
})
export class ContentModule { }
