import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardDashboardComponent } from './components/dashboard/dashboard.component';
import { StandardRoutingModule } from './standard.routing.module';

@NgModule({
  declarations: [StandardDashboardComponent],
  imports: [
    CommonModule,
    StandardRoutingModule
  ]
})
export class StandardModule { }
