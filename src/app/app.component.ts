import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  inputText: string;
  outputText: string;

  constructor() {
    this.inputText = '';
    this.outputText = '';
  }

  ngOnInit(): void {
  }

  randomText(): void {
    this.outputText = '';
    const text = this.inputText.split('');
    let randomIndex: number;
    let textFound: string;

    while (text.length !== 0) {
      randomIndex = Math.floor(Math.random() * text.length);
      textFound = text[randomIndex];
      if (textFound !== ' ') {
        this.outputText += textFound + '/';
      }
      text.splice(randomIndex, 1);
    }
  }
}
