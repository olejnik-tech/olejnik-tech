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
  loggedUser : string = '';

  constructor(public authService:AuthService){}

  ngOnInit(): void {
    // Get server status
    this.authService.getServerStatus().subscribe(
      data => {
        this.serverStatus = data;
        this.authService.serverStatus.subscribe(ss => ss = data);
      },
    );
  }
}