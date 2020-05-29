import { NgModule } from '@angular/core';
import { LoginComponent } from './views/login/login.component';
import { PagesRoutingModule } from './login-routing.module';

@NgModule({
    declarations: [ LoginComponent ],
    imports: [ PagesRoutingModule ],
    providers: [],
    exports: [ LoginComponent ]
})
export class LoginModule { }
