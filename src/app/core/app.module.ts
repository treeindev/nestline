// Dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { ContentModule } from '../modules/content/content.module';
import { LoginModule } from '../modules/login/login.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ContentModule,
        LoginModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
