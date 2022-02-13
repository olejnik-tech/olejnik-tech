import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  constructor() { }

  public downloadCV(){
    console.log('downloading CV');
    alert('Downloading CV is not supported, until I will solve the security dilema. Contact me, if you require it (CV, not the dilema ...). Thanks for understanding.');
  }

  ngOnInit(): void {
  }

}
