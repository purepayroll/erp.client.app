import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-error-500',
  templateUrl: './error-500.component.html',
})
export class Error500Component {
  private activated_module = "";
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((v: any) => this.activated_module = v.activated_module);
  }

  backToHomePage = () => {
    const target_url = `${this.activated_module ? `/${this.activated_module}/dashboard` : "/login"}`;
    this.router.navigate([target_url])
  }
}
