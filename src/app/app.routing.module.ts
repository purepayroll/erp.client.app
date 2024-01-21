import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./modules/core/components/auth/login/login.component";
import { Error404Component } from "./modules/core/components/error/error-404/error-404.component";
import { ForgotPasswordComponent } from "./modules/core/components/auth/forgot-password/forgot-password.component";
import { Error500Component } from "./modules/core/components/error/error-500/error-500.component";
import { NgModule } from "@angular/core";
import { adminAuthGuard } from "./modules/core/guard/admin-auth.guard";
import { standardAuthGuard } from "./modules/core/guard/standard-auth.guard";

const _routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    {
        path: 'admin',
        canActivate: [adminAuthGuard],
        loadChildren: () => import('./modules/admin/admin.module').
            then((_module) => _module.AdminModule)
    },
    {
        path: 'standard',
        canActivate: [standardAuthGuard],
        loadChildren: () => import('./modules/standard/standard.module').
            then((_module) => _module.StandardModule)
    },
    { path: 'error-500', component: Error500Component, data: { activated_module: '' } },
    { path: '**', component: Error404Component }
]

@NgModule({
    imports: [RouterModule.forRoot(_routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}