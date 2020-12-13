import { Component } from '@angular/core';
import arrayOfWords from './../utils/words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Word Generator';
  words = '';
  limit = 10;

  handleSlideChange(newLimit: number) {
    this.limit = newLimit;
  }

  generate() {
    this.words = arrayOfWords.slice(0, this.limit).join(' ');
  }
}
