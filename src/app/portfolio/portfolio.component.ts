import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  public downloadCV(){
    console.log('downloading CV');
    alert('Downloading CV is not supported, until I will solve the security dilema. Contact me, if you require it. Thanks for understanding.');
  }

  ngOnInit(): void {
  }

}