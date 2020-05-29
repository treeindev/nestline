import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('../modules/login/login.module')
            .then(m => m.LoginModule),
    },
    {
        path: 'content',
        loadChildren: () => import('../modules/content/content.module')
            .then(m => m.ContentModule),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
