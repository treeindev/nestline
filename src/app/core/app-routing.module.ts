import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * The application routing follows the Lazy-loading feature modules described on Angular's documentaiton: 
 * https://angular.io/guide/lazy-loading-ngmodules
 * 
 * Each module describes its routing structure in a separate module,
 * allowing to split each module independently.
 */
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
    },
    {
        path: '', 
        redirectTo: 'content',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'content',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
