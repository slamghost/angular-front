import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  range: number;

  constructor() {
    this.range = parseInt((Math.random() * (5 - 1) + 1).toString())
  }

  ngOnInit(): void {
  }

}
