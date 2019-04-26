import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app ';
  date = '2019/04/23';

  constructor() {
    this.changeTitle('new test');
  }

  changeTitle(title: string): void {
    this.title = title;
  }

}
