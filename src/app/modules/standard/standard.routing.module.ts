import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { StandardDashboardComponent } from "./components/dashboard/dashboard.component";

const _routes: Routes = [
    { path: 'dashboard', component: StandardDashboardComponent },
    { path: '', redirectTo: '/standard/dashboard',pathMatch:'full' },
    { path: 'dashboard', component: StandardDashboardComponent },
];

@NgModule({
    imports: [RouterModule.forChild(_routes)],
    exports: [RouterModule]
})
export class StandardRoutingModule {
}