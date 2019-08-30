import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '' },
    {
        path: 'template',
        loadChildren: () => import('./modules/template/template.module').then(mod => mod.TemplateModule)
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
