import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 


import { ContentComponent } from './content.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

@NgModule({
    declarations: [
        ContentComponent,
        HeaderComponent,
        NavigationComponent,
        DashboardComponent
    ],
    imports: [ CommonModule ],
    providers: [],
    exports: [
        ContentComponent,
    ]
})
export class ContentModule { }
