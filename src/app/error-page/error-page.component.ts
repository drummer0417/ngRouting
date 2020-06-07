import { Component, OnInit } from '@angular/core';
import { Data, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errorMessage: string = 'Unexpected error!!';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.errorMessage = this.route.snapshot.data['message'];

    // the above line or if data can change the below solution

    this.route.data.subscribe((data: Data) => {
      this.errorMessage = data['message'];
    })
  }
}