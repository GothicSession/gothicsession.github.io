import { Component } from '@angular/core';
import { faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sofya';
  faInstagram = faInstagram;
  faTelegram = faTelegram;

  constructor() {
  }
}
