import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbar={
    logo:"logoName",
    item1:"Home",
    item2:"Contact us",
    item3:"About us",
    item4:"Profile"
  }
  logo={
    src:"https://freelogopng.com/images/all_img/1656733637logo-canva-png.png",
    alt:"logo"
  }
}
