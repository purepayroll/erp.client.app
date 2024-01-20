import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminDashboardComponent } from "./components/dashboard/dashboard.component";
import { AdminRoutingModule } from "./admin.routing.module";
import { HeaderComponent } from "./shared/components/header/header.component";
import { ContainerComponent } from "./shared/components/container/container.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

@NgModule({
    declarations: [
        ContainerComponent,
        HeaderComponent,
        FooterComponent,
        AdminDashboardComponent
    ],
    imports: [CommonModule, AdminRoutingModule]
})
export class AdminModule {
    
}