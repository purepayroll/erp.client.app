import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminDashboardComponent } from "./components/dashboard/dashboard.component";
import { AdminRoutingModule } from "./admin.routing.module";

@NgModule({
    declarations: [AdminDashboardComponent],
    imports: [CommonModule, AdminRoutingModule]
})
export class AdminModule {

}