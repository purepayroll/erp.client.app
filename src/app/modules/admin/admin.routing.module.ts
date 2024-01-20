import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminDashboardComponent } from "./components/dashboard/dashboard.component";

//lets we have requiment of redirect to home page!
import { Error404Component } from '../core/components/error/error-404/error-404.component';

const _routes: Routes = [
    { path: 'dashboard', component: AdminDashboardComponent },
    { path: '', pathMatch: 'full', redirectTo: '/admin/dashboard' },
    { path: '**', component: Error404Component }
];



@NgModule({
    imports: [RouterModule.forChild(_routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {

}