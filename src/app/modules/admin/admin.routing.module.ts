import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminDashboardComponent } from "./components/dashboard/dashboard.component";

//lets we have requiment of redirect to home page!
import { Error404Component } from '../core/components/error/error-404/error-404.component';
import { ContainerComponent } from "./shared/components/container/container.component";

const _routes: Routes = [
    {
        path: '',
        component: ContainerComponent,
        children: [
            { path: 'dashboard', component: AdminDashboardComponent },
            { path: '', pathMatch: 'full', redirectTo: '/admin/dashboard' },
            { path: '**', component: Error404Component, data: { activated_module: "admin" } }
        ]
    }

];



@NgModule({
    imports: [RouterModule.forChild(_routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {

}