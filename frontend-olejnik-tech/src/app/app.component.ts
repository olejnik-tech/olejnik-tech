import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-olejnik-tech';

  serverStatus: boolean = false;

  constructor(private authService:AuthService){}

  ngOnInit(): void {
    this.authService.getServerStatus().subscribe(
      data => {
        this.serverStatus = data;
      },
    )
  }

}
