import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-component-a',
  templateUrl: './route-component-a.component.html',
  styleUrls: ['./route-component-a.component.css']
})
export class RouteComponentAComponent implements OnInit {
  inputValue: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToB() {
    this.router.navigate(['/routeB'],{
      queryParams:{
        data: this.inputValue
      }
    })
  }



}
