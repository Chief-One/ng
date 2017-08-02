import { Component } from '@angular/core';
import { ResourceService } from "app/services/resource.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  name: string;
  isExtra: boolean = false;

  constructor(private router: Router, public resource: ResourceService) { }

  navigate() {
    this.router.navigate(['/secure'])
  }

  onSubmit(value: any) {
    console.log(value)
  }
}
