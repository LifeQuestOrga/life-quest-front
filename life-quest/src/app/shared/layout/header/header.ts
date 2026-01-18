import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  imports: [
    RouterOutlet
  ],
  standalone: true
})
export class Header {

}
