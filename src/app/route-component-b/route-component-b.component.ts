import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-component-b',
  templateUrl: './route-component-b.component.html',
  styleUrls: ['./route-component-b.component.css']
})
export class RouteComponentBComponent implements OnInit {
  inputValue: any
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.inputValue = params.data
    })
  }

}
